import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

class MyComponent extends React.Component {
  render() {
    return (
      <Container className="mt-0 ">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={9}>
            <Carousel className="border rounded  height100">
              {/* Ins erisci le tue immagini qui */}
              <Carousel.Item className="carousel-image">
                <img
                  className="d-block w-100 rounded heightcustom "
                  src="PresentazioneMaglia.png"
                  alt="First slide"
                />
                <a href="/Articles/Article" className="cover_all">
                  <Carousel.Caption>
                    <h3>
                      Nuova Maglia Home Vintage !<br></br> disponibile dal 13/07
                    </h3>
                  </Carousel.Caption>
                </a>
              </Carousel.Item>
              <Carousel.Item className="carousel-image">
                <img
                  className="d-block w-100 rounded heightcustom"
                  onClick={this.scrollToBottom}
                  src="/Abbonamento.png"
                  alt="Second slide"
                />
                <a href="/Tickets" className="cover_all"></a>
                <Carousel.Caption>
                  <h3>Date e orari per la nuova campagna abbonamenti</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-image">
                <img
                  className="d-block w-100 rounded heightcustom"
                  src="/Esultanza.png"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Lukaku regala il 6° posto matematico alla Roma, Ultimo gol all'olimpico</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={3}>
            <div className="marginmobile text-center">
              <Card className="nohover height100 ">
                <Card.Body className="text-white bg-dark border rounded">
                  <Card.Title className="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope-paper white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z" />
                    </svg>
                    Ultime Notizie
                  </Card.Title>

                  {/* Lista delle notizie */}
                  <Nav.Link as={Link} to="/Articles/Article">
                    <p className="customcolor">La Probabile Formazione vs il Genoa</p>
                    <h6 className="customFontp">Ancora in dubbio Dybala, ricaduta per zalewski</h6>
                  </Nav.Link>
                  <hr></hr>
                  <Nav.Link as={Link} to="/Articles/Article1">
                    <p className="customcolor">Contattato L'entourage di Icardi</p>
                    <h6 className="customFontp">
                      Wanda Nara: "trattative avanzate" ma serve tempo
                    </h6>
                  </Nav.Link>
                  <hr></hr>
                  <Nav.Link as={Link} to="./Articles/Article2">
                    <p className="customcolor">Ranking UEFA per club Aggiornato </p>
                    <h6 className="customFontp">
                      Scaliamo ed arriviamo al 6° posto della classifica !
                    </h6>
                  </Nav.Link>
                  <hr></hr>
                  <Nav.Link as={Link} to="/Articles/Article3">
                    <p className="customcolor">Il 6° posto può valere la Champions</p>
                    <h6 className="customFontp">
                      Se l'Atalanta vince la coppa ed arriva 5a ci sarebbe...
                    </h6>
                  </Nav.Link>
                  <hr></hr>
                  <Nav.Link as={Link} to="/Articles/Article4">
                    <p className="customcolor">Situazione Finanziaria Migliorata</p>
                    <h6 className="customFontp">
                      Sembra ci sia stato un miglioramento delle entrate...
                    </h6>
                  </Nav.Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <hr></hr>
      </Container>
    );
  }
}

export default MyComponent;
