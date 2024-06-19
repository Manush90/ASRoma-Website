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
            }, index * 300); // Ritardo di 300ms tra le card
            observer.unobserve(entry.target); // Interrompi l'osservazione dopo l'animazione
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
    <Container className="mt-3">
      {/* <h2> ASR Info </h2> */}
      <Row className="mb-3">
        {[
          {
            title: "Biglietti",
            text: "Acquista adesso i biglietti per le varie partite della tua squadra del cuore!",
            img: "https://media.asroma.com/prod/images/landscape_medium_fill/d012863e46d5-ticketsfuoricasa.png",
            link: "/tickets",
            linkText: "Acquista Ora",
          },
          {
            title: "Allenamenti",
            text: "Novità ed Aggiornamenti dal campo di allenamento Agostino di Bartolomei!",
            img: "https://media.asroma.com/prod/images/landscape_medium_fill/f985f3c0fde8-cover.png",
            link: "/Allenamenti",
            linkText: "Guarda Gallery",
          },
          {
            title: "Europa League",
            text: "Segui Live i sorteggi,Classifiche, risultati e marcatori!",
            img: "https://i0.wp.com/ungherianews.com/wp-content/uploads/2023/05/sevrom.jpeg?fit=988%2C556&ssl=1",
            link: "/EuropaLeague",
            linkText: "Visita Ora",
          },
          {
            title: "Coppa Italia",
            text: "Acquista i biglietti per le partite della coppa guarda il tabellone e risultati!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEot3_bG5y5KZfn5KYRN17iMWpkEvRpzno5becr94vpA&s",
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
      <hr />
    </Container>
  );
}

export default BasicExample;
