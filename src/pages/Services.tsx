// src/pages/Services.tsx
import React from "react";
import { Container, Row, Col, ListGroup, Card, Button } from "react-bootstrap";

const servicesData = [
  {
    title: "Computadora de Alto Rendimiento",
    image: "/images/computadora.jpg",
    description: "Disfruta de la mejor tecnología para tus proyectos. Ideal para trabajos de diseño, edición de video y videojuegos.",
    price: "$1,200 USD",
    conditions: "Incluye garantía de 1 año. Envío gratuito dentro de la región."
  },
  {
    title: "Accesorios para Computadora",
    image: "/images/accesorios.jpg",
    description: "Todo lo que necesitas para completar tu setup: teclados, ratones, audífonos y más.",
    price: "Desde $30 USD",
    conditions: "Garantía de 6 meses. No incluye envío."
  },
  {
    title: "Monitor 4K Ultra HD",
    image: "/images/monitor.jpg",
    description: "La mejor resolución para tus proyectos creativos o juegos de alta gama. Tecnología de última generación.",
    price: "$450 USD",
    conditions: "Garantía de 2 años. Envío gratuito dentro de la región."
  },
  {
    title: "Tarjeta RAM 16GB",
    image: "/images/tarjeta-ram.jpg",
    description: "Aumenta el rendimiento de tu computadora con esta memoria RAM de alta velocidad, ideal para multitareas.",
    price: "$100 USD",
    conditions: "Garantía de 1 año. Envío disponible a todo el país."
  },
  {
    title: "Disco Duro SSD 1TB",
    image: "/images/disco-duro.jpg",
    description: "Mejora la velocidad de tu computadora con nuestro SSD de 1TB, ideal para almacenar grandes cantidades de datos.",
    price: "$120 USD",
    conditions: "Garantía de 2 años. Envío gratuito en compras superiores a $150 USD."
  },
  {
    title: "Impresora Láser",
    image: "/images/impresora.jpg",
    description: "Imprime tus documentos con la mejor calidad y rapidez. Ideal para oficina o uso doméstico.",
    price: "$200 USD",
    conditions: "Incluye cartucho de tóner. Garantía de 1 año."
  }
];

const Services: React.FC = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">Nuestros Servicios</h1>

      <ListGroup className="mb-5">
        <ListGroup.Item>Venta de computadoras, notebooks, celulares y accesorios, entre otros.</ListGroup.Item>
        <ListGroup.Item>Asesoría tecnológica personalizada y mucho más.</ListGroup.Item>
        <ListGroup.Item>Instalación de software y configuración de equipos, entre otros.</ListGroup.Item>
        <ListGroup.Item>Soporte técnico y mantenimiento preventivo.</ListGroup.Item>
      </ListGroup>

      <h2 className="mb-4">Servicios de TechHome</h2>

      <Row>
        {servicesData.map((service, idx) => (
          <Col md={6} lg={4} key={idx} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={service.image} alt={service.title} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Card.Text><strong>Precio:</strong> {service.price}</Card.Text>
                <Card.Text><strong>Condiciones:</strong> {service.conditions}</Card.Text>
                <Button variant="primary">Más Información</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
// src/pages/Services..tsx
// import React from "react";