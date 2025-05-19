// src/pages/Contact.tsx
import { Card } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import ContactLocation from '../components/ContactLocation';

const Contact = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <Card className="p-4 shadow">
              <ContactForm title="Formulario de contacto" />
            </Card>
          </div>
        </div>
      </div>

      <ContactLocation />
    </>
  );
};

export default Contact;
// import React from 'react..';
// import { Card } from 'react-bootstrap';