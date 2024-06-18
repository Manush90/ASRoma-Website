import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const sectors = [
  { id: "curva-nord", name: "Curva Nord", price: "230,00€" },
  { id: "curva-sud", name: "Curva Sud", price: "270,00€" },
  { id: "distinti-nord", name: "Distinti Nord", price: "340,00€" },
  { id: "distinti-sud", name: "Distinti Sud", price: "340,00€" },
  { id: "tribuna-tevere", name: "Tribuna Tevere", price: "490,00€" },
  { id: "monte-mario", name: "Monte Mario", price: "670,00€" },
];

const Stadium = () => {
  const [highlighted, setHighlighted] = useState(null);

  return (
    <Container>
      <hr />
      <h1 className="text-center mx-3 customcolor">Prezzi e settori</h1>

      <Col className="d-flex justify-content-center" xs="auto">
        <img className="animated-image" src="/Abbon.png" alt="abbonam" width="auto" height="200" />
      </Col>

      <h2 className="text-center ">dal 20/05/2024 al 15/06/2024</h2>
      <h2 className="text-center ">
        Fase 1 riservata ai vecchi abbonati che riconfermano il loro posto a sedere
      </h2>

      <h5 className="text-center customcolor">
        *In base alle disponibilità e alla riconferma del posto da parte degli abbonati
      </h5>
      <hr></hr>

      <Row className="d-lg-none flex-column">
        <Col>
          <ul className="sector-list text-center">
            {sectors.map((sector) => (
              <li
                key={sector.id}
                onMouseEnter={() => setHighlighted(sector.id)}
                onMouseLeave={() => setHighlighted(null)}
                className={highlighted === sector.id ? "highlight" : ""}
              >
                {sector.name} - {sector.price}
              </li>
            ))}
          </ul>
        </Col>
        <Col>
          <div className="stadium-svg">
            <svg viewBox="0 0 960 640" xmlns="http://www.w3.org/2000/svg">
              {/* Parte Alta */}
              <rect
                x="240"
                y="60"
                width="480"
                height="120"
                fill="#A52A2A"
                id="tribuna-tevere"
                className={highlighted === "tribuna-tevere" ? "highlight" : ""}
              />
              <text x="480" y="120" textAnchor="middle" fill="white" font-size="48">
                Tribuna Tevere
              </text>

              <rect
                x="120"
                y="60"
                width="120"
                height="120"
                fill="#FFA500"
                id="distinti-nord-1"
                className={highlighted === "distinti-nord" ? "highlight" : ""}
              />
              <text x="180" y="120" textAnchor="middle" fill="white" font-size="36">
                Dist. Nord
              </text>

              <rect
                x="720"
                y="60"
                width="120"
                height="120"
                fill="#FFA500"
                id="distinti-sud-1"
                className={highlighted === "distinti-sud" ? "highlight" : ""}
              />
              <text x="780" y="120" textAnchor="middle" fill="white" font-size="36">
                Dist. Sud
              </text>

              {/* Parte Centrale */}
              <rect
                x="120"
                y="180"
                width="120"
                height="240"
                fill="#A52A2A"
                id="curva-nord"
                className={highlighted === "curva-nord" ? "highlight" : ""}
              />
              <text
                x="180"
                y="300"
                textAnchor="middle"
                fill="white"
                font-size="36"
                transform="rotate(-90 180,300)"
              >
                Curva Nord
              </text>

              {/* Campo da gioco */}
              <rect x="240" y="180" width="480" height="240" fill="#32CD32" id="campo" />
              {/* Linee del campo */}
              <line x1="480" y1="180" x2="480" y2="420" stroke="white" stroke-width="2" />
              <circle cx="480" cy="300" r="48" stroke="white" stroke-width="2" fill="none" />
              <rect
                x="240"
                y="228"
                width="48"
                height="144"
                stroke="white"
                stroke-width="2"
                fill="none"
              />
              <rect
                x="672"
                y="228"
                width="48"
                height="144"
                stroke="white"
                stroke-width="2"
                fill="none"
              />

              <rect
                x="720"
                y="180"
                width="120"
                height="240"
                fill="#A52A2A"
                id="curva-sud"
                className={highlighted === "curva-sud" ? "highlight" : ""}
              />
              <text
                x="780"
                y="300"
                textAnchor="middle"
                fill="white"
                font-size="36"
                transform="rotate(90 780,300)"
              >
                Curva Sud
              </text>

              {/* Parte Bassa */}
              <rect
                x="240"
                y="420"
                width="480"
                height="120"
                fill="#A52A2A"
                id="monte-mario"
                className={highlighted === "monte-mario" ? "highlight" : ""}
              />
              <text x="480" y="480" textAnchor="middle" fill="white" font-size="48">
                Monte Mario
              </text>

              <rect
                x="120"
                y="420"
                width="120"
                height="120"
                fill="#FFA500"
                id="distinti-nord-2"
                className={highlighted === "distinti-nord" ? "highlight" : ""}
              />
              <text x="180" y="480" textAnchor="middle" fill="white" font-size="36">
                Dist. Nord
              </text>

              <rect
                x="720"
                y="420"
                width="120"
                height="120"
                fill="#FFA500"
                id="distinti-sud-2"
                className={highlighted === "distinti-sud" ? "highlight" : ""}
              />
              <text x="780" y="480" textAnchor="middle" fill="white" font-size="36">
                Dist. Sud
              </text>
            </svg>
          </div>
        </Col>
      </Row>
      <Row className="d-none d-lg-flex">
        <Col lg={6}>
          <ul className="sector-list">
            {sectors.map((sector) => (
              <li
                key={sector.id}
                onMouseEnter={() => setHighlighted(sector.id)}
                onMouseLeave={() => setHighlighted(null)}
                className={highlighted === sector.id ? "highlight" : ""}
              >
                {sector.name} - {sector.price}
              </li>
            ))}
          </ul>
        </Col>
        <Col lg={6}>
          <div className="stadium-svg">
            <svg viewBox="0 0 960 640" xmlns="http://www.w3.org/2000/svg">
              {/* Parte Alta */}
              <rect
                x="240"
                y="60"
                width="480"
                height="120"
                fill="#A52A2A"
                id="tribuna-tevere"
                className={highlighted === "tribuna-tevere" ? "highlight" : ""}
              />
              <text x="480" y="120" textAnchor="middle" fill="white" font-size="48">
                Tribuna Tevere
              </text>

              <rect
                x="120"
                y="60"
                width="120"
                height="120"
                fill="#FFA500"
                id="distinti-nord-1"
                className={highlighted === "distinti-nord" ? "highlight" : ""}
              />
              <text x="180" y="120" textAnchor="middle" fill="white" font-size="36">
                Dist. Nord
              </text>

              <rect
                x="720"
                y="60"
                width="120"
                height="120"
                fill="#FFA500"
                id="distinti-sud-1"
                className={highlighted === "distinti-sud" ? "highlight" : ""}
              />
              <text x="780" y="120" textAnchor="middle" fill="white" font-size="36">
                Dist. Sud
              </text>

              {/* Parte Centrale */}
              <rect
                x="120"
                y="180"
                width="120"
                height="240"
                fill="#A52A2A"
                id="curva-nord"
                className={highlighted === "curva-nord" ? "highlight" : ""}
              />
              <text
                x="180"
                y="300"
                textAnchor="middle"
                fill="white"
                font-size="36"
                transform="rotate(-90 180,300)"
              >
                Curva Nord
              </text>

              {/* Campo da gioco */}
              <rect x="240" y="180" width="480" height="240" fill="#32CD32" id="campo" />
              {/* Linee del campo */}
              <line x1="480" y1="180" x2="480" y2="420" stroke="white" stroke-width="2" />
              <circle cx="480" cy="300" r="48" stroke="white" stroke-width="2" fill="none" />
              <rect
                x="240"
                y="228"
                width="48"
                height="144"
                stroke="white"
                stroke-width="2"
                fill="none"
              />
              <rect
                x="672"
                y="228"
                width="48"
                height="144"
                stroke="white"
                stroke-width="2"
                fill="none"
              />

              <rect
                x="720"
                y="180"
                width="120"
                height="240"
                fill="#A52A2A"
                id="curva-sud"
                className={highlighted === "curva-sud" ? "highlight" : ""}
              />
              <text
                x="780"
                y="300"
                textAnchor="middle"
                fill="white"
                font-size="36"
                transform="rotate(90 780,300)"
              >
                Curva Sud
              </text>

              {/* Parte Bassa */}
              <rect
                x="240"
                y="420"
                width="480"
                height="120"
                fill="#A52A2A"
                id="monte-mario"
                className={highlighted === "monte-mario" ? "highlight" : ""}
              />
              <text x="480" y="480" textAnchor="middle" fill="white" font-size="48">
                Monte Mario
              </text>

              <rect
                x="120"
                y="420"
                width="120"
                height="120"
                fill="grey"
                id="distinti-nord-2"
                // className={highlighted === "distinti-nord" ? "highlight" : ""}
              />
              <text x="180" y="480" textAnchor="middle" fill="white" font-size="36">
                Ospiti
              </text>

              <rect
                x="720"
                y="420"
                width="120"
                height="120"
                fill="#FFA500"
                id="distinti-sud-2"
                className={highlighted === "distinti-sud" ? "highlight" : ""}
              />
              <text x="780" y="480" textAnchor="middle" fill="white" font-size="36">
                Dist. Sud
              </text>
            </svg>
          </div>
        </Col>
        <h4 className="text-center ">
          La Fase 2 ha inizio dalla 00:00 del giorno 16/06/2024 ed è riservata ai titolari
          dell'abbonamento coppe
        </h4>
      </Row>
      <hr></hr>
    </Container>
  );
};

export default Stadium;
