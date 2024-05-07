import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../PlayerCss.css";
import { Container } from "react-bootstrap";

function Rosa({ giocatori }) {
  const portieri = giocatori.filter((giocatore) => giocatore.Ruolo === "Portiere");
  const difensori = giocatori.filter((giocatore) => giocatore.Ruolo === "Difensore");
  const centrocampisti = giocatori.filter((giocatore) => giocatore.Ruolo === "Centrocampista");
  const attaccanti = giocatori.filter((giocatore) => giocatore.Ruolo === "Attaccante");

  return (
    <Container fluid>
      <h1 className="text-center mt-4">Portieri</h1>
      <Row xs={1} sm={2} md={2} lg={3} className="p-5 g-4">
        {portieri.map((giocatore, index) => (
          <Col key={index}>
            <Card className="player-card">
              <Card.Img variant="top" src={giocatore.img} />
              <Card.Body>
                <Card.Title className="text-center">{giocatore.Nome}</Card.Title>
                <Card.Text className="text-center">
                  <Button variant="danger" className=" mb-2 playerbutton">
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
      {/* -------------------------DIFENSORI--------------------------------------- */}
      <h1 className="text-center mt-4">Difensori</h1>
      <Row xs={1} sm={2} md={2} lg={3} className="p-5 g-4">
        {difensori.map((giocatore, index) => (
          <Col key={index}>
            <Card className="player-card">
              <Card.Img variant="top" src={giocatore.img} />
              <Card.Body>
                <Card.Title className="text-center">{giocatore.Nome}</Card.Title>
                <Card.Text className="text-center">
                  <Button variant="danger" className=" mb-2 playerbutton">
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
      {/* ----------------------CENTROCAMPISTI-------------------------------- */}
      <h1 className="text-center mt-4">Centrocampisti</h1>
      <Row xs={1} sm={2} md={2} lg={3} className="p-5 g-4">
        {centrocampisti.map((giocatore, index) => (
          <Col key={index}>
            <Card className="player-card">
              <Card.Img variant="top" src={giocatore.img} />
              <Card.Body>
                <Card.Title className="text-center">{giocatore.Nome}</Card.Title>
                <Card.Text className="text-center">
                  <Button variant="danger" className=" mb-2 playerbutton">
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
      {/* ----------------------ATTACCANTI-------------------------------- */}
      <h1 className="text-center mt-4">Attaccanti</h1>
      <Row xs={1} sm={2} md={2} lg={3} className="p-5 g-4">
        {attaccanti.map((giocatore, index) => (
          <Col key={index}>
            <Card className="player-card">
              <Card.Img variant="top" src={giocatore.img} />
              <Card.Body className="backgroundcolor">
                <Card.Title className="text-center">{giocatore.Nome}</Card.Title>
                <Card.Text className="text-center">
                  <Button variant="danger" className=" mb-2 playerbutton">
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
