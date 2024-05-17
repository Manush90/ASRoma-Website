import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const ArticoloSportivo = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            src="https://media.asroma.com/prod/images/landscape_medium_fill/fe928137c26f-download-2.png"
            fluid
            className="mt-3 "
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">Disponibili i kit Home Adidas 24/25</h1>
          <h5 className="customcolor">di Manuel Dell'Oste</h5>
          <h6 className="customcolor">del 16/05/2024</h6>
          <hr></hr>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi ut dolor mollis
            finibus. Cras tristique, nunc id molestie vehicula, ligula neque faucibus elit, non
            maximus nisi purus ac ex. Morbi dapibus arcu a erat commodo, a varius lorem eleifend.
          </p>
          <p>
            In this article, we will discuss the recent match between Team A and Team B in the
            Champions League. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            nisi ut dolor mollis finibus. Cras tristique, nunc id molestie vehicula, ligula neque
            faucibus elit, non maximus nisi purus ac ex. Morbi dapibus arcu a erat commodo, a varius
            lorem eleifend.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi ut dolor mollis
            finibus. Cras tristique, nunc id molestie vehicula, ligula neque faucibus elit, non
            maximus nisi purus ac ex. Morbi dapibus arcu a erat commodo, a varius lorem eleifend.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticoloSportivo;
