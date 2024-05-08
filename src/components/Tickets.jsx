import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Tickets() {
  return (
    <>
      <Container fluid className="mt-3">
        <h1 className="text-center mt-2">Biglietti Disponibili</h1>
        <h3 className="text-center mt-2">(Il link reindirizza al sito ufficiale della A.S.Roma)</h3>
        <Row xs={1} sm={2} md={2} lg={2} className="p-2 g-4">
          <Col>
            <Card className="player-card static">
              <Card.Img variant="top" src="/ticket1.jpg" />
              <Card.Body>
                <Card.Title className="text-center">AS Roma - Genoa</Card.Title>
                <Card.Text className="text-center ">
                  Serie A 37 giornata <br /> Stadio Olimpico di Roma
                  <br />
                  19/05/2024
                  <br />
                  ore 20:45
                  <hr></hr>
                  <Link
                    to="https://www.asroma.com/it/biglietti/"
                    className="mt-0 mb-3 playerbutton btn btn-primary"
                  >
                    Compra Ora
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="player-card static">
              <Card.Img variant="top" src="/ticket2.jpg" />
              <Card.Body>
                <Card.Title className="text-center">AS Roma - Empoli</Card.Title>
                <Card.Text className="text-center ">
                  Serie A 37 giornata <br /> Stadio Olimpico di Roma
                  <br />
                  19/05/2024
                  <br />
                  ore 20:45
                  <hr></hr>
                  <Link
                    to="https://www.asroma.com/it/biglietti/"
                    className="mt-0 mb-3 playerbutton btn btn-primary"
                  >
                    Compra Ora
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Tickets;
