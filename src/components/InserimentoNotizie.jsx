import React, { useState, useEffect } from "react";
import { Form, Button, Container, Table, Alert } from "react-bootstrap";
import { firestore } from "../firebase";
import { collection, addDoc, updateDoc, deleteDoc, getDocs, doc } from "firebase/firestore";
import { useAuth } from "../AuthProvider";

const InserimentoNotizie = () => {
  const { currentUser, isAdmin } = useAuth();
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    author: "",
    date: "",
    content: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (isAdmin) {
      fetchNews();
    }
  }, [isAdmin]);

  const fetchNews = async () => {
    try {
      const newsCollection = collection(firestore, "Notizie");
      const newsSnapshot = await getDocs(newsCollection);
      const newsList = newsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setNews(newsList);
    } catch (err) {
      setError("Failed to fetch news");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      if (editingId) {
        const docRef = doc(firestore, "Notizie", editingId);
        await updateDoc(docRef, form);
        setSuccess("Notizia aggiornata con successo");
      } else {
        await addDoc(collection(firestore, "Notizie"), form);
        setSuccess("Notizia aggiunta con successo");
      }
      fetchNews();
      resetForm();
    } catch (error) {
      setError("Errore nell'aggiungere/modificare la notizia");
      console.error(error);
    }
  };

  const handleEdit = (newsItem) => {
    setForm(newsItem);
    setEditingId(newsItem.id);
  };

  const handleDelete = async (id) => {
    try {
      const docRef = doc(firestore, "Notizie", id);
      await deleteDoc(docRef);
      fetchNews();
      setSuccess("Notizia eliminata con successo");
    } catch (error) {
      setError("Errore nell'eliminare la notizia");
      console.error(error);
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      subtitle: "",
      author: "",
      date: "",
      content: "",
      image: "",
    });
    setEditingId(null);
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
      <h1 className="customcolor text-center mt-2">Inserimento Notizie</h1>
      <h3 className=" text-center">
        Qui è possibile Inserire, eliminare o modificare un articolo esistente
      </h3>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Titolo</Form.Label>
          <Form.Control
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formSubtitle">
          <Form.Label>Sottotitolo</Form.Label>
          <Form.Control
            type="text"
            value={form.subtitle}
            onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formAuthor">
          <Form.Label>Autore</Form.Label>
          <Form.Control
            type="text"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDate">
          <Form.Label>Data</Form.Label>
          <Form.Control
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formContent">
          <Form.Label>Contenuto</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formImage">
          <Form.Label>URL Immagine</Form.Label>
          <Form.Control
            type="text"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            required
          />
        </Form.Group>
        <Button variant="primary me-2 mt-2" type="submit">
          {editingId ? "Update News" : "Aggiungi Notizia"}
        </Button>
        <Button variant="danger mt-2" onClick={resetForm} className="ml-2">
          Elimina campi
        </Button>
      </Form>
      <hr />
      <h2>Gestione Notizie</h2>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Titolo</th>
              <th>Sottotitolo</th>
              <th>Autore</th>
              <th>Data</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {news.map((newsItem) => (
              <tr key={newsItem.id}>
                <td>{newsItem.title}</td>
                <td>{newsItem.subtitle}</td>
                <td>{newsItem.author}</td>
                <td>{newsItem.date}</td>
                <td>
                  <Button variant="warning" onClick={() => handleEdit(newsItem)}>
                    modifica
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(newsItem.id)}
                    className="ml-2"
                  >
                    Elimina
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default InserimentoNotizie;
