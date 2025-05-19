import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

export interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  title: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ title }) => {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError('Todos los campos son obligatorios.');
      setSuccess(false);
      return;
    }

    if (!validateEmail(form.email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      setSuccess(false);
      return;
    }

    try {
      const stored = localStorage.getItem('techhome-contact');
      const messages = stored ? JSON.parse(stored) : [];
      const updated = [...messages, form];
      localStorage.setItem('techhome-contact', JSON.stringify(updated));

      setForm({ name: '', email: '', message: '' });
      setError('');
      setSuccess(true);
    } catch (err) {
      console.error('Error al guardar en localStorage:', err);
      setError('Ocurrió un error al enviar el mensaje.');
      setSuccess(false);
    }
  };

  return (
    <>
      <h2 className="text-center mb-4 titulo-contacto">{title}</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">¡Mensaje enviado con éxito!</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="tucorreo@ejemplo.com"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={4}
            placeholder="Escribe tu mensaje aquí..."
            value={form.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="info" type="submit" className="w-100 mt-3">
          Enviar mensaje
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
// // src/components/ContactForm.tsx
// import React, { useState } from 'react';