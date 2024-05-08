import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Container className="mt-3">
      <h2> ASR Info </h2>
      <Row className="mb-3">
        <Col xs={6} sm={6} md={4} lg={3}>
          <Card className="mb-3">
            <Card.Img
              className="coverimg"
              variant="top"
              src="https://media.asroma.com/prod/images/landscape_medium_fill/d012863e46d5-ticketsfuoricasa.png"
            />
            <Card.Body className="d-flex flex-column justify-content-center shadow">
              <Card.Title className="display-6 text-center">Biglietti</Card.Title>
              <Card.Text className="h5 text-center">
                Acquista adesso i biglietti per le varie partite della tua squadra del cuore !
              </Card.Text>
              <Link to="/tickets" className="mx-auto buttonColor shadow btn btn-primary">
                Acquista Ora
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <Card>
            <Card.Img
              variant="top"
              className="coverimg"
              src="https://media.asroma.com/prod/images/landscape_medium_fill/f985f3c0fde8-cover.png"
            />
            <Card.Body className="d-flex flex-column justify-content-center shadow">
              <Card.Title className="display-6 text-center">Allenamenti</Card.Title>
              <Card.Text className="h5 text-center">
                Le ultime news, aggiornamenti dal campo Agostino di Bartolomei!
              </Card.Text>
              <Button className="mx-auto buttonColor shadow" variant="primary">
                Leggi di più
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <Card>
            <Card.Img
              variant="top"
              className="coverimg"
              src="https://i0.wp.com/ungherianews.com/wp-content/uploads/2023/05/sevrom.jpeg?fit=988%2C556&ssl=1"
            />
            <Card.Body className="d-flex flex-column justify-content-center shadow">
              <Card.Title className="display-6 text-center">Europa League</Card.Title>
              <Card.Text className="h5 text-center">
                Guarda Live i sorteggi <br></br>del prossimo turno di Uefa europa league !
              </Card.Text>
              <Button className="mx-auto buttonColor shadow" variant="primary">
                Guarda ora
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <Card>
            <Card.Img
              variant="top"
              className="coverimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEot3_bG5y5KZfn5KYRN17iMWpkEvRpzno5becr94vpA&s"
            />
            <Card.Body className="d-flex flex-column justify-content-center shadow">
              <Card.Title className="display-6 text-center">Tim Cup</Card.Title>
              <Card.Text className="h5 text-center">
                Acquistai biglietti per la stracittadina di Venerdi 26 Maggio!
              </Card.Text>
              <Button className="mx-auto buttonColor shadow" variant="primary">
                Acquista Ora
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BasicExample;
