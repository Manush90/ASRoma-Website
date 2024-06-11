import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase"; // Assicurati che il percorso sia corretto

function Newsletter() {
  const [email, setEmail] = useState("");
  const [messaggio, setMessaggio] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(firestore, "Newsletter"), {
        email: email,
      });
      setMessaggio("Email registrata con successo!");
      setEmail("");
    } catch (error) {
      setMessaggio("Errore nella registrazione dell'email: " + error.message);
    }
  };

  return (
    <Container fluid className="mt-3 ps-4 pe-4 text-center">
      <Row className="justify-content-center">
        <Col sm={9} md={9} lg={9}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-center">Iscriviti alla nostra Newsletter!</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci qui il tuo indirizzo e-mail"
                className="text-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <h6 className="mt-2 customcolor">Non condivideremo in nessun modo i tuoi dati</h6>
            </Form.Group>
            <Button className="buttonColor" type="submit">
              Iscriviti
            </Button>
            {messaggio && <p className="mt-3">{messaggio}</p>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Newsletter;
