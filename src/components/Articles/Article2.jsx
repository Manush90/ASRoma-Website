import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const ArticoloSportivo = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex column">
          <Image
            src="https://upload.wikimedia.org/wikipedia/it/thumb/2/2a/UEFA_logo_%282012%29.svg/1200px-UEFA_logo_%282012%29.svg.png"
            fluid
            className="mt-3 mx-auto"
            width="200"
            height="auto"
          />
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col className=" column justify-content-center">
          <h1 className="text-center">
            Nuovo Ranking UEFA di Fine Anno <br></br> Saliamo al 6° Posto !
          </h1>
          <h5 className="customcolor">di Manuel Dell'Oste</h5>
          <h6 className="customcolor">del 16/05/2024</h6>
          <hr></hr>
          <br></br>
        </Col>
      </Row>
      <Row className="mt-1">
        <Col md={6} className="column">
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
            finibus. Cras tristique, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            in nisi ut dolor mollis finibus. Cras tristique, nunc id molestie vehicula, ligula neque
            faucibus elit, non maximus nisi purus ac ex. Morbi dapibus arcu nunc id molestie
            vehicula, ligula neque faucibus elit, non maximus nisi purus ac ex. Morbi dapibus arcu a
            erat commodo, a varius lorem eleifend.
          </p>
        </Col>
        <Col md={6} className="d-flex column justify-content-center">
          <Image src="/rankingUEFA.png" fluid />
        </Col>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi ut dolor mollis
          finibus. Cras tristique, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          in nisi ut dolor mollis finibus. Cras tristique, nunc id molestie vehicula, ligula neque
          faucibus elit, non maximus nisi purus ac ex. Morbi dapibus arcu nunc id molestie vehicula,
          ligula neque faucibus elit, non maximus nisi purus ac ex. Morbi dapibus arcu a erat
          commodo, a varius lorem eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam in nisi ut dolor mollis finibus. Cras tristique, Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam in nisi ut dolor mollis finibus. Cras tristique, nunc
          id molestie vehicula, ligula neque faucibus elit, non maximus nisi purus ac ex. Morbi
          dapibus arcu nunc id molestie vehicula, ligula neque faucibus elit, non maximus nisi purus
          ac ex. Morbi dapibus arcu a erat commodo, a varius lorem eleifend.
        </p>
      </Row>
    </Container>
  );
};

export default ArticoloSportivo;
