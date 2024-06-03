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
    if (value > 60 && value >= 0) {
      return `0${value}`;
    }

    return value;
  };

  return (
    <>
      <video className="video-background fullscreen bottomshadow " autoPlay loop>
        {/* classe muted per togliere l'audio */}
        <source src="/videoroma.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <Container className="main-content marginedit   mb-0">
        <Row className="flagColor ">
          <Col>
            <u>
              <h6 className="text-center mt-3 mb-0">Prossimo Incontro</h6>
            </u>
            <h2 className="text-center">
              <img
                className="mx-3"
                alt="logohome"
                height="50px"
                src="https://upload.wikimedia.org/wikipedia/it/thumb/e/e4/Empoli_logo_2021.svg/1200px-Empoli_logo_2021.svg.png"
              />
              FC Empoli - AS Roma
              <img
                className="mx-3"
                alt="logoaway"
                height="50px"
                src="https://upload.wikimedia.org/wikipedia/it/thumb/0/0e/AS_Roma_Logo_2017.svg/1200px-AS_Roma_Logo_2017.svg.png"
              />
              <h6 className="text-center">Serie A Tim - 26/5/2024 - 20:45</h6>
            </h2>

            <div className="text-center customcolor small ">
              <span className="fontlarge">{addLeadingZero(timeLeft.days)}</span>&nbsp;giorni -&nbsp;
              <span className="fontlarge">{addLeadingZero(timeLeft.hours)}</span>&nbsp;ore -&nbsp;
              <span className="fontlarge">{addLeadingZero(timeLeft.minutes)}</span>&nbsp;minuti
              -&nbsp;
              <span className="fontlarge">{addLeadingZero(timeLeft.seconds)}</span>
              &nbsp;secondi&nbsp;
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyCountdown;
