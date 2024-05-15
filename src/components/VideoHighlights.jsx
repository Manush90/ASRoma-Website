import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Video() {
  return (
    <>
      <Container>
        <h2 className="text-center"> highlights ultime partite</h2>
        <Row>
          <Col sm={6} md={6} lg={6}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/BrdMgDhl0zc?si=VorvZyhjuzfUUnHp"
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
              src="https://www.youtube.com/embed/oE3xaHof3hQ?si=_0OTrwPkymAT3yoF"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
          <hr></hr>
        </Row>
      </Container>
    </>
  );
}

export default Video;
