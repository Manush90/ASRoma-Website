import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-3 footercol">
      <Container>
        <Row>
          <Col className="mt-3 h5 text-center" md={4}>
            <h4>Link Utili</h4>
            <hr></hr>
            <ul className="p-0" style={{ listStyleType: "none" }}>
              <li>
                <a href="/">Lavora con noi</a>
              </li>
              <li>
                <a href="/about">Chi Siamo</a>
              </li>
              <li>
                <a href="/services">Servizi</a>
              </li>
              <li>
                <a href="/contact">Contatti</a>
              </li>
              <li>
                <li></li>
              </li>
            </ul>
          </Col>
          <Col className="mt-3 h6 text-center" md={4}>
            <h4>Contatti</h4>
            <hr></hr>
            <p>Informazioni di contatto</p>
            <p>Indirizzo: Via Cicerone, 12345, Roma</p>
            <p>Email: Asromafans@gmail.com</p>
            <p>Telefono: +123 456 7890</p>
          </Col>
          <Col className="mt-3 text-center" md={4}>
            <h4>Sponsor</h4>
            <hr></hr>
            <img
              alt="logo"
              height="50px"
              src="https://styles.redditmedia.com/t5_8pga9f/styles/profileIcon_psl3envaej8b1.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=31fbda56413eb14b8f7415fa9425ea7e7800df7b"
            />

            <img
              className="mx-2"
              alt="logo"
              height="30px"
              src="https://upload.wikimedia.org/wikipedia/it/thumb/6/62/Ferrarelle_-_Logo_%28Italia%2C_2021%29.png/640px-Ferrarelle_-_Logo_%28Italia%2C_2021%29.png"
            />

            <img
              className="mt-2"
              alt="logo"
              height="70px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Riyadh_Season_Logo.svg/1200px-Riyadh_Season_Logo.svg.png"
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="mb-0 h6">
            <p className="text-center mb-1">
              © {new Date().getFullYear()} AsromaFans.it Tutti i diritti riservati.
              <br></br> Created By Manuel Dell'Oste
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
