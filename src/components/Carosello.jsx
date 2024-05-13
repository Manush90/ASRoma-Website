import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";

class MyComponent extends React.Component {
  render() {
    return (
      <Container className="mt-0">
        <Row>
          <Col xs={12} sm={12} md={12} lg={8}>
            <Carousel className="border rounded height100">
              {/* Ins erisci le tue immagini qui */}
              <Carousel.Item className="carousel-image">
                <img
                  className="d-block w-100 rounded"
                  src="https://hips.hearstapps.com/hmg-prod/images/the-roma-starting-line-up-during-the-match-roma-v-milan-at-news-photo-1695122646.jpg?crop=1xw:0.84334xh;center,top"
                  alt="First slide"
                />
                <a href="./Highlights.jsx" className="cover_all">
                  <Carousel.Caption>
                    <h3>Titolo dell'immagine 1</h3>
                  </Carousel.Caption>
                </a>
              </Carousel.Item>
              <Carousel.Item className="carousel-image">
                <img
                  className="d-block w-100 rounded"
                  onClick={this.scrollToBottom}
                  src="https://assets.goal.com/images/v3/blt8c4b9a6edaf8e773/Dybala_Roma_Bayer_Leverkusen_2024.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Guarda gli Highlights di Roma-Leverkusen</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-image">
                <img
                  className="d-block w-100 rounded"
                  src="https://i.eurosport.com/2024/05/05/3962694-80448588-2560-1440.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Titolo dell'immagine 3</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <div className="mt-2 p-0">
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
                  <ul>
                    {/* Lista delle notizie */}
                    <a href="www">
                      <li>Obiettivo Rimonta a Leverkusen</li>
                    </a>
                    <hr></hr>
                    <a href="www">
                      <li>Probabili Formazioni di Giovedì</li>
                    </a>
                    <hr></hr>
                    <a href="www">
                      <li>Ranking UEFA Aggiornato </li>
                    </a>
                    <hr></hr>
                    <a href="www">
                      <li>Indagati Pallotta e Friedkin</li>
                    </a>
                    <hr></hr>
                    <a href="www">
                      <li>Indagati Pallotta e Friedkin</li>
                    </a>
                  </ul>
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
