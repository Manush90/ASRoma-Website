import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Video() {
  return (
    <>
      <Container>
        <h2> highlights e Conferenze stampa </h2>
        <Row>
          <Col sm={6} md={6} lg={6}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Ca95XZZ6wuo?si=12UbQpDPN3Y6DxSA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
          <Col sm={6} md={6} lg={6}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/V1aXJpgih8o?si=5RiQdbs_6L5pXkKS"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Video;
