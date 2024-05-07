import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

function Tickets() {
  return (
    <>
      <Container fluid className="mt-3">
        <h1 className="text-center mt-2">Biglietti Disponibili</h1>
        <h3 className="text-center mt-2">(Il link reindirizza al sito ufficiale della A.S.Roma)</h3>
        <Row xs={1} sm={2} md={2} lg={2} className="p-2 g-4">
          <Col>
            <Card className="player-card static">
              <Card.Img
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Stadio_Olimpico_2024.jpg/1200px-Stadio_Olimpico_2024.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">AS Roma - Genoa</Card.Title>
                <Card.Text className="text-center ">
                  Serie A 37 giornata <br /> Stadio Olimpico di Roma
                  <br />
                  19/05/2024
                  <br />
                  ore 20:45
                  <hr></hr>
                  <Button variant="danger" className=" mt-0 mb-3 playerbutton">
                    Compra ora
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="player-card static">
              <Card.Img
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Stadio_Olimpico_2024.jpg/1200px-Stadio_Olimpico_2024.jpg"
              />
              <Card.Body>
                <Card.Title className="text-center">AS Roma - Empoli</Card.Title>
                <Card.Text className="text-center ">
                  Serie A 37 giornata <br /> Stadio Olimpico di Roma
                  <br />
                  19/05/2024
                  <br />
                  ore 20:45
                  <hr></hr>
                  <Button variant="danger" className=" mt-0 mb-3 playerbutton">
                    Compra ora
                  </Button>
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
