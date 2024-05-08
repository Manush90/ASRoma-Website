import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";

class MyComponent extends React.Component {
  render() {
    return (
      <Container className="mt-4">
        <Row>
          <Col xs={12} sm={12} md={12} lg={8}>
            <Carousel className="border rounded">
              {/* Inserisci le tue immagini qui */}
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
            <Card className="mt-3 nohover">
              <Card.Body className="text-white bg-dark border rounded">
                <Card.Title className="text-center">
                  <i class="bi bi-newspaper"></i>Ultime Notizie
                </Card.Title>
                <ul>
                  {/* Lista delle notizie */}
                  <li>Obiettivo Rimonta a Leverkusen</li>
                  <hr></hr>
                  <li>Probabili Formazioni di Giovedì</li>
                  <hr></hr>
                  <li>Ranking UEFA Aggiornato </li>
                  <hr></hr>
                  <li>Indagati Pallotta e Friedkin</li>
                  <hr></hr>
                  <li>Indagati Pallotta e Friedkin</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MyComponent;
