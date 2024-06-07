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
      <Container className="main-content marginedit mb-0 ">
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
              <h6 className="text-center">Serie A Tim - 26/7/2024 - 20:45</h6>
            </h2>
            <Container className="d-flex justify-content-center customcolor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-clock-history"
                viewBox="0 0 16 16"
              >
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
              </svg>
            </Container>
            <div className="text-center customcolor small">
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
      {/* <video className="video-background fullscreen  bottomshadow " autoPlay loop>
        <source src="/videoroma.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video> */}
    </>
  );
};

export default MyCountdown;
