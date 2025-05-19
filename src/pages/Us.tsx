import { Container, Row, Col } from 'react-bootstrap';

const Us = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="mb-4">Sobre Nosotros</h1>
          <img
            src="/images/nosotros.png"
            alt="Equipo TechHome"
            className="img-fluid rounded shadow mb-4"
            style={{ maxWidth: '100%', height: 'auto' }}
          />

          <p className="text-justify">
            En <strong>TechHome</strong>, nos especializamos en la venta de productos tecnológicos de alta calidad.
            Nuestro objetivo es ofrecer un servicio de excelencia y asesoría personalizada a cada cliente.
          </p>

          <p className="text-justify">
            Contamos con un equipo profesional con años de experiencia en la industria tecnológica.
          </p>

          <section id="about">
            <h2>Información de la Empresa</h2>
            <p>
              TechHome es una empresa innovadora dedicada a crear soluciones inteligentes para el hogar. Nos especializamos en diseñar dispositivos que mejoran la calidad de vida mediante la automatización y la conectividad.
            </p>

            <h2>Nuestra Historia</h2>
            <p>
              Fundada en 2015 por un grupo de entusiastas de la tecnología, TechHome comenzó como una startup enfocada en automatización accesible para el hogar. Con el tiempo, hemos crecido y nos hemos expandido a nivel mundial.
            </p>

            <h2>Misión</h2>
            <p>
              Nuestra misión es transformar los hogares en lugares más inteligentes, seguros y eficientes, utilizando tecnología de punta al alcance de todos.
            </p>

            <h2>Visión</h2>
            <p>
              Aspiramos a ser líderes globales en tecnología para hogares inteligentes, reconocidos por nuestra innovación, sustentabilidad y excelencia.
            </p>

            <h2>Nuestro Equipo</h2>
            <p>
              En TechHome trabajamos con un equipo multidisciplinario de expertos: ingenieros de software, diseñadores de productos, especialistas en atención al cliente y marketing, todos comprometidos con ofrecerte lo mejor.
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Us;
// // src/pages/Us...tsx
// import React from 'react';