import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setWelcomeMessage("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Salva i dati utente nel local storage
      localStorage.setItem("user", JSON.stringify(user));

      onLogin(user);
      setWelcomeMessage(`Bentornato! ${user.displayName || user.email}!`);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="text-center justify-content-center mt-2">
      <Row className="justify-content-center">
        <Col xs={10} md={6}>
          <h1>Login</h1>
          <hr></hr>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-door-open customcolor mb-2"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
            <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
          </svg>

          {error && <Alert variant="danger">{error}</Alert>}
          {welcomeMessage && <Alert variant="success">{welcomeMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Inserisci  Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button className="customButton mt-3" variant="primary" type="submit">
              Esegui Login
            </Button>
          </Form>
          <h6 className="mt-3">
            Non hai un account? <Link to="/register">Registrati Ora</Link>
          </h6>
          <hr></hr>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
