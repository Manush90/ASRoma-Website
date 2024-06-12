import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import "../PlayerCss.css";
import Staff from "../data/Staff.json"; // Assicurati che il percorso sia corretto

function Rosa() {
  const allenatori = Staff.filter((giocatore) => giocatore.Ruolo === "Allenatore");

  return (
    <Container fluid>
      <h1 className="text-center mt-4">Allenatore</h1>
      <Row xs={1} sm={2} md={2} lg={2} className="p-5 g-4 justify-content-center">
        {allenatori.map((giocatore, index) => (
          <Col key={index}>
            <Card className="player-card ">
              <Card.Img variant="top" src={giocatore.img} />
              <Card.Body>
                <Card.Title className="text-center">{giocatore.Nome}</Card.Title>
                <Card.Text className="text-center">
                  <Button variant="danger" className="mb-2 playerbutton">
                    {giocatore.Numero}
                  </Button>
                  <br />
                  Presenze: {giocatore.Presenze}
                  <br />
                  Goal: {giocatore.Goal}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Rosa;
