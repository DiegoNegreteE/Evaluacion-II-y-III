// src/components/ContactLocation.tsx
import { Container } from 'react-bootstrap';

const ContactLocation: React.FC = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center contact-location-title">Ubicación de TechHome</h2>
      <p className="text-center">Visítanos en nuestra oficina en:</p>
      <p className="text-center fw-bold">
        Avenida Providencia 765, Región Metropolitana, Santiago, Chile
      </p>
      <div className="d-flex justify-content-center">
        <iframe
          title="Mapa TechHome"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.683837961073!2d-70.62301348480606!3d-33.42371998077981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfbfc2030145%3A0x41a42b3853d5c0da!2sAv.%20Providencia%20765%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1712698141302!5m2!1ses-419!2scl"
          width="100%"
          height="450"
          style={{ border: 0, maxWidth: '1000px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
};

export default ContactLocation;
// // src/components/ContactLocation.tsx
// import React from 'react';