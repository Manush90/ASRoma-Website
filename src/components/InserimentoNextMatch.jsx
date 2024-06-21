import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { useAuth } from "../AuthProvider";

const InserimentoNextMatch = () => {
  const { isAdmin } = useAuth();
  const [form, setForm] = useState({
    CompetizioneDataOra: "",
    LogoCasa: "",
    LogoTrasferta: "",
    Squadre: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (isAdmin) {
      fetchMatchData();
    }
  }, [isAdmin]);

  const fetchMatchData = async () => {
    try {
      const docRef = doc(firestore, "ProssimoIncontro", "NextMatch");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setForm(docSnap.data());
      } else {
        console.error("No such document!");
      }
    } catch (err) {
      setError("Failed to fetch match data");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const docRef = doc(firestore, "ProssimoIncontro", "NextMatch");
      await updateDoc(docRef, form);
      setSuccess("Dati aggiornati con successo");
    } catch (error) {
      setError("Errore nell'aggiornare i dati");
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
      <h1 className="text-center customcolor">Gestione Prossimo Incontro</h1>
      <h3 className="text-center mb-5">
        Qui è possibile modificare la gestione del riquadro prossimo incontro
      </h3>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCompetizioneDataOra">
          <Form.Label>Competizione Data Ora</Form.Label>
          <Form.Control
            type="text"
            value={form.CompetizioneDataOra}
            onChange={(e) => setForm({ ...form, CompetizioneDataOra: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formLogoCasa">
          <Form.Label>Logo Casa URL</Form.Label>
          <Form.Control
            type="text"
            value={form.LogoCasa}
            onChange={(e) => setForm({ ...form, LogoCasa: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formLogoTrasferta">
          <Form.Label>Logo Trasferta URL</Form.Label>
          <Form.Control
            type="text"
            value={form.LogoTrasferta}
            onChange={(e) => setForm({ ...form, LogoTrasferta: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formSquadre">
          <Form.Label>Squadre</Form.Label>
          <Form.Control
            type="text"
            value={form.Squadre}
            onChange={(e) => setForm({ ...form, Squadre: e.target.value })}
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

export default InserimentoNextMatch;
