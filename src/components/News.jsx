import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Container className="mt-3">
      <h2> ASR Info </h2>
      <Row className="mb-3">
        <Col xs={6} sm={6} md={6} lg={3} className="mb-3 col-custom-xxs">
          <Card className="fixed-height-card shadow">
            <Card.Img
              className=" card-img-top"
              variant="top"
              src="https://media.asroma.com/prod/images/landscape_medium_fill/d012863e46d5-ticketsfuoricasa.png"
            />
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="display-6 text-center">Biglietti</Card.Title>
              <Card.Text className="h5 text-center truncate-multiline">
                Acquista adesso i biglietti per le varie partite della tua squadra del cuore!
              </Card.Text>
              <Link to="/tickets" className="mx-auto buttonColor shadow btn btn-primary">
                Acquista Ora
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={6} md={6} lg={3} className="mb-3 col-custom-xxs">
          <Card className="fixed-height-card shadow">
            <Card.Img
              variant="top"
              className=" card-img-top"
              src="https://media.asroma.com/prod/images/landscape_medium_fill/f985f3c0fde8-cover.png"
            />
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="display-6 text-center">Allenamenti</Card.Title>
              <Card.Text className="h5 text-center truncate-multiline">
                Novità ed Aggiornamenti dal campo di allenamento Agostino di Bartolomei!
              </Card.Text>
              <Link to="/Allenamenti" className="mx-auto buttonColor shadow btn btn-primary">
                Guarda Gallery
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={6} md={6} lg={3} className="mb-3 col-custom-xxs">
          <Card className="fixed-height-card shadow">
            <Card.Img
              variant="top"
              className=" card-img-top"
              src="https://i0.wp.com/ungherianews.com/wp-content/uploads/2023/05/sevrom.jpeg?fit=988%2C556&ssl=1"
            />
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="display-6 text-center truncate">Europa League</Card.Title>
              <Card.Text className="h5 text-center truncate-multiline">
                Segui Live i sorteggi,Classifiche, risultati e marcatori!
              </Card.Text>
              <Link to="/EuropaLeague" className="mx-auto buttonColor shadow btn btn-primary">
                Visita Ora
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={6} md={6} lg={3} className="mb-3 col-custom-xxs">
          <Card className="fixed-height-card shadow">
            <Card.Img
              variant="top"
              className=" card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEot3_bG5y5KZfn5KYRN17iMWpkEvRpzno5becr94vpA&s"
            />
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="display-6 text-center">Coppa Italia</Card.Title>
              <Card.Text className="h5 text-center truncate-multiline">
                Acquista i biglietti per le partite della coppa guarda il tabellone e risultati!
              </Card.Text>
              <Link to="/CoppaItalia" className="mx-auto buttonColor shadow btn btn-primary">
                Acquista Ora
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default BasicExample;
