import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Stadium from "./Stadium";

function Tickets() {
  return (
    <>
      <img className="d-block w-100 rounded  " src="/stadio_olimpico1.png" alt="First slide" />
      <Container fluid className="mt-3 ">
        <h1 className="text-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-ticket-detailed customcolor"
            viewBox="0 0 16 16"
          >
            <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
            <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z" />
          </svg>{" "}
          <br />
          Campagna Abbonamenti
        </h1>

        <h3 className="text-center mt-2">Stagione 2024/2025</h3>

        <Row xs={1} sm={2} md={2} lg={2} className="p-2 g-4 d-flex justify-content-center">
          <Col>
            <Card className="player-card static">
              <Card.Img variant="top" src="/Abbonamento.png" />
              <Card.Body>
                <Card.Title className="text-center titlesizecardticket">
                  Abbonamento Stagione 24/25
                </Card.Title>
                <Card.Text className="text-center textsizecardticket">
                  Campagna Abbonamenti <br /> Fase 1 "Vecchi Abbonati"
                  <hr></hr>
                  20/05/24 - 15/06/24
                  <br />
                  ore 20:45
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    fill="currentColor"
                    class="bi bi-ticket-perforated"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 4.85v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9z" />
                    <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9z" />
                  </svg>
                  <hr></hr>
                  <Link
                    to="https://www.asroma.com/it/biglietti/"
                    className="mt-0 mb-3 ticketbutton playerbutton btn btn-primary"
                  >
                    Abbonati Ora
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Stadium></Stadium>
      <Container fluid className="mt-3">
        <h1 className="text-center customcolor mt-2">Biglietti Disponibili</h1>
        <h3 className="text-center mt-2">(Il link reindirizza al sito ufficiale della A.S.Roma)</h3>
        <Row xs={2} sm={3} md={3} lg={3} className="p-2 g-4 d-flex justify-content-center">
          <Col>
            <Card className="player-card static">
              <Card.Img variant="top" src="/ticket1.png" />
              <Card.Body>
                <Card.Title className="text-center titlesizecardticket">AS Roma - Genoa</Card.Title>
                <Card.Text className="text-center textsizecardticket">
                  Serie A // giornata <br /> Stadio Olimpico di Roma
                  <br />
                  19/05/2024
                  <br />
                  ore 20:45
                  <hr></hr>
                  <Link
                    to="https://www.asroma.com/it/biglietti/"
                    className="mt-0 mb-3 ticketbutton playerbutton btn btn-primary"
                  >
                    Compra Ora
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="player-card static">
              <Card.Img variant="top" src="/ticket_empty.png" />
              <Card.Body>
                <Card.Title className="text-center titlesizecardticket">"// - //"</Card.Title>
                <Card.Text className="text-center textsizecardticket">
                  Serie A // giornata <br /> Stadio Olimpico di Roma
                  <br />
                  --/--/----
                  <br />
                  ore --:--
                  <hr></hr>
                  <Link
                    to="https://www.asroma.com/it/biglietti/"
                    className="mt-0 mb-3 ticketbutton playerbutton btn btn-primary"
                  >
                    Compra Ora
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="player-card static">
              <Card.Img variant="top" src="/ticket_empty.png" />
              <Card.Body>
                <Card.Title className="text-center titlesizecardticket">"// - //"</Card.Title>
                <Card.Text className="text-center textsizecardticket">
                  Serie A // giornata <br /> Stadio Olimpico di Roma
                  <br />
                  19/05/2024
                  <br />
                  ore 20:45
                  <hr></hr>
                  <Link
                    to="https://www.asroma.com/it/biglietti/"
                    className="mt-0 mb-3 ticketbutton playerbutton btn btn-primary"
                  >
                    Compra Ora
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="player-card static">
              <Card.Img variant="top" src="/ticket_empty.png" />
              <Card.Body>
                <Card.Title className="text-center titlesizecardticket">"// - //"</Card.Title>
                <Card.Text className="text-center textsizecardticket">
                  Serie A // giornata <br /> Stadio Olimpico di Roma
                  <br />
                  19/05/2024
                  <br />
                  ore 20:45
                  <hr></hr>
                  <Link
                    to="https://www.asroma.com/it/biglietti/"
                    className="mt-0 mb-3 ticketbutton playerbutton btn btn-primary"
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
