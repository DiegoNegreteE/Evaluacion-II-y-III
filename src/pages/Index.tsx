import { Container, Carousel } from 'react-bootstrap';

const Index = () => {
  return (
    <>
    
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner1.jpg"
            alt="Oferta 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner2.jpg"
            alt="Oferta 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/banner3.jpg"
            alt="Oferta 3"
          />
        </Carousel.Item>
      </Carousel>

      <Container className="mt-5 text-center">
        <h1>Bienvenido a TechHome</h1>
        <p>Tu tienda online de confianza en productos electrónicos y más.</p>
        <p>Explora nuestras ofertas semanales y encuentra toda la tecnología que necesitas.</p>
        <p>De todo para tú hogar, familia y al alcance de la mano.</p>
      </Container>

    </>
  );
};

export default Index;
// // src/components/ContactForm...tsx
// import  React, { useState } from 'react';