import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Risultati = ({ partite }) => {
  // Filtra le partite per quelle della Roma
  const partiteRoma = partite.filter(
    (partita) => partita.SquadraCasa === "Roma" || partita.SquadraTrasferta === "Roma"
  );

  return (
    <Container>
      <Row>
        {partiteRoma.map((partita, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src="/1giornata.jpg" />
              <Card.Body>
                <Card.Title className="text-center newfont">
                  <strong>{`${partita.SquadraCasa} ${partita.GolCasa} - ${partita.GolTrasferta} ${partita.SquadraTrasferta}`}</strong>
                </Card.Title>
                <Card.Text className="text-center">
                  {partita.Giornata}°Giornata
                  <br></br> {partita.Marcatori}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Risultati;
