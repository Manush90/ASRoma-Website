import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert as BootstrapAlert } from "react-bootstrap";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { useAuth } from "../AuthProvider"; // Assicurati che il percorso sia corretto

const AlertFix = () => {
  const { isAdmin } = useAuth();
  const [alertMsg, setAlertMsg] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (isAdmin) {
      fetchAlertMsg();
      fetchTargetDate();
    }
  }, [isAdmin]);

  const fetchAlertMsg = async () => {
    try {
      const docRef = doc(firestore, "Alert", "AlertMsg");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAlertMsg(docSnap.data().messaggioAlert);
      } else {
        console.error("No such document!");
      }
    } catch (err) {
      setError("Failed to fetch alert message");
    }
  };

  const fetchTargetDate = async () => {
    try {
      const docRef = doc(firestore, "Countdown", "Time");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setTargetDate(docSnap.data().DataOraMatch);
      } else {
        console.error("No such document!");
      }
    } catch (err) {
      setError("Failed to fetch target date");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const alertDocRef = doc(firestore, "Alert", "AlertMsg");
      await updateDoc(alertDocRef, { messaggioAlert: alertMsg });

      const targetDateDocRef = doc(firestore, "Countdown", "Time");
      await updateDoc(targetDateDocRef, { DataOraMatch: targetDate });

      setSuccess("Messaggio e Data aggiornati con successo");
    } catch (error) {
      setError("Errore nell'aggiornare il messaggio o la data");
      console.error(error);
    }
  };

  if (!isAdmin) {
    return (
      <Container>
        <p>Accesso negato. Solo gli amministratori possono accedere a questa sezione.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Gestione Messaggio di Alert e Data del Prossimo Match</h2>
      {error && <BootstrapAlert variant="danger">{error}</BootstrapAlert>}
      {success && <BootstrapAlert variant="success">{success}</BootstrapAlert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formAlertMsg">
          <Form.Label>Messaggio di Alert</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={alertMsg}
            onChange={(e) => setAlertMsg(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formTargetDate">
          <Form.Label>Data e Ora del Prossimo Match</Form.Label>
          <Form.Control
            type="datetime-local"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Aggiorna
        </Button>
      </Form>
    </Container>
  );
};

export default AlertFix;
