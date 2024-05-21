// Registration.jsx

import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Registration = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      onRegister(userCredential.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="text-center mt-2">
      <h1>Registrazione</h1>
      <hr></hr>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="currentColor"
        class="bi bi-pencil-square customcolor mb-2"
        viewBox="0 0 16 16"
      >
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path
          fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
        />
      </svg>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Indirizzo e-mail</Form.Label>
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
            placeholder="Inserisci Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="customButton mt-3" variant="primary" type="submit">
          Registrati
        </Button>
      </Form>
      <hr></hr>
    </Container>
  );
};

export default Registration;
