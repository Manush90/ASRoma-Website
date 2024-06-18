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
              src="https://www.youtube.com/embed/uIoF_GxDNno?si=-0gwUj6Fzzg87m6R"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Col>
          <Col sm={6} md={6} lg={6}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/bVnFYT_-3DI?si=eQEbtYbhHmAzGx2W"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Col>
          <hr></hr>
        </Row>
      </Container>
    </>
  );
}

export default Video;
