import React, { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Animation.css"; // Importa il file CSS specifico per questo componente

function BasicExample() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 300);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <Container className="mt-3">
        {/* <h2> ASR Info </h2> */}
        <Row className="mb-3">
          {[
            {
              title: "Biglietti",
              text: "Acquista adesso i biglietti per le varie partite della tua squadra del cuore!",
              img: "./bigliettis.webp",
              link: "/tickets",
              linkText: "Acquista Ora",
            },
            {
              title: "Allenamenti",
              text: "Novità ed Aggiornamenti dal campo di allenamento Agostino di Bartolomei!",
              img: "training.webp",
              link: "/Allenamenti",
              linkText: "Guarda Gallery",
            },
            {
              title: "Europa League",
              text: "Segui Live i sorteggi,Classifiche, risultati e marcatori!",
              img: "europaleaguelogo.webp",
              link: "/EuropaLeague",
              linkText: "Visita Ora",
            },
            {
              title: "Coppa Italia",
              text: "Acquista i biglietti per le partite della coppa guarda il tabellone e risultati!",
              img: "/coppaitalia.webp",
              link: "/CoppaItalia",
              linkText: "Acquista Ora",
            },
          ].map((item, index) => (
            <Col xs={6} sm={6} md={6} lg={3} className="mb-3" key={index}>
              <Card
                className="fixed-height-card shadow card-container"
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <Card.Img className="card-img-top" variant="top" src={item.img} />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Title className="titolonews display-6 text-center">{item.title}</Card.Title>
                  <Card.Text className="sottotitolonews h5 text-center truncate-multiline">
                    {item.text}
                  </Card.Text>
                  <Link to={item.link} className="mx-auto mb-1 buttonColor shadow btn btn-primary">
                    {item.linkText}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <hr />
    </>
  );
}

export default BasicExample;
