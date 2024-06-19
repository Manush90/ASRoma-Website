import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";

const MyCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [matchData, setMatchData] = useState({});
  const [countdownData, setCountdownData] = useState({});

  const calculateTimeLeft = (targetDate) => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const fetchMatchData = async () => {
      try {
        const docRefMatch = doc(firestore, "ProssimoIncontro", "NextMatch");
        const docSnapMatch = await getDoc(docRefMatch);
        if (docSnapMatch.exists()) {
          const dataMatch = docSnapMatch.data();
          setMatchData(dataMatch);
        } else {
          console.error("No such document in ProssimoIncontro!");
        }

        const docRefCountdown = doc(firestore, "Countdown", "Time");
        const docSnapCountdown = await getDoc(docRefCountdown);
        if (docSnapCountdown.exists()) {
          const dataCountdown = docSnapCountdown.data();
          setCountdownData(dataCountdown);
          setTimeLeft(calculateTimeLeft(dataCountdown.DataOraMatch));
        } else {
          console.error("No such document in Countdown!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMatchData();

    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => calculateTimeLeft(countdownData.DataOraMatch));
    }, 1000);

    return () => clearInterval(timer);
  }, [countdownData.DataOraMatch]);

  const addLeadingZero = (value) => (value < 10 ? `0${value}` : value);

  return (
    <Container className="main-content marginedit mb-0">
      <Row className="flagColor">
        <Col>
          <u>
            <h6 className="text-center mt-3 txtshadow mb-0">Prossimo Incontro</h6>
          </u>
          <h2 className="text-center">
            <div className="d-flex teamspos ">
              <img
                className="me-3 txtshadow "
                alt="logohome"
                height="90px"
                src={matchData.LogoCasa || ""}
              />
              <h4 className="txtshadow m-0 ">{matchData.Squadre || "Squadre"}</h4>
              <img
                className="ms-3"
                alt="logoaway"
                height="90px"
                src={matchData.LogoTrasferta || ""}
              />
            </div>
          </h2>
          <h6 className="text-center txtshadow matchhome">
            {matchData.CompetizioneDataOra || "Data Ora"}
          </h6>
          <Container className="d-flex justify-content-center customcolor mt-2">
            <img
              src={`${process.env.PUBLIC_URL}/stadiumstyle.svg`}
              alt="Logostadio"
              height="40px"
              width="auto"
            />
          </Container>
          <div className="text-center txtshadow customcolor small">
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
  );
};

export default MyCountdown;
