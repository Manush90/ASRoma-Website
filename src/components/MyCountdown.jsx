import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyCountdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <Container>
      <Row>
        <Col>
          <h6 className="text-center mb-0">Prossimo Incontro</h6>
          <h2 className="text-center">
            <img
              className="mx-3"
              alt="logohome"
              height="50px"
              src="https://upload.wikimedia.org/wikipedia/it/thumb/0/0e/AS_Roma_Logo_2017.svg/1200px-AS_Roma_Logo_2017.svg.png"
            />
            AS Roma - Atalanta
            <img
              className="mx-3"
              alt="logoaway"
              height="50px"
              src="https://upload.wikimedia.org/wikipedia/it/thumb/8/81/Logo_Atalanta_Bergamo.svg/1200px-Logo_Atalanta_Bergamo.svg.png"
            />
            <h6>Serie A Tim - 12/5 20:45</h6>
          </h2>
          <hr></hr>
          <div className="text-center">
            <span>{addLeadingZero(timeLeft.days)}</span>&nbsp;giorni&nbsp;
            <span>{addLeadingZero(timeLeft.hours)}</span>&nbsp;ore&nbsp;
            <span>{addLeadingZero(timeLeft.minutes)}</span>&nbsp;minuti&nbsp;
            <span>{addLeadingZero(timeLeft.seconds)}</span>&nbsp;secondi&nbsp;
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyCountdown;
