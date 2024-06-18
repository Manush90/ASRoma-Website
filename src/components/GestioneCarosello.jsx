import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore, storage } from "../firebase";
import { useAuth } from "../AuthProvider";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const GestioneCarosello = () => {
  const { isAdmin } = useAuth();
  const [form, setForm] = useState({
    Slide1: "",
    Slide1Link: "",
    Slide1txt: "",
    Slide2: "",
    Slide2Link: "",
    Slide2txt: "",
    Slide3: "",
    Slide3Link: "",
    Slide3txt: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      fetchCaroselloData();
    }
  }, [isAdmin]);

  const fetchCaroselloData = async () => {
    try {
      const docRef = doc(firestore, "Carosello", "Slides");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setForm(docSnap.data());
      } else {
        console.error("No such document!");
      }
    } catch (err) {
      setError("Failed to fetch carousel data");
    }
  };

  const handleImageUpload = (e, slide) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `carousel/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setUploading(true);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        setError("Errore nel caricamento dell'immagine");
        setUploading(false);
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setForm((prevForm) => ({
            ...prevForm,
            [slide]: downloadURL,
          }));
          setUploading(false);
          setSuccess("Immagine caricata con successo");
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const docRef = doc(firestore, "Carosello", "Slides");
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
      <h1 className="text-center customcolor">Gestione Carosello</h1>
      <h4 className="text-center ">
        In questa sezione è possibile modificare le 3 slide del carosello, le modifiche prevedono
        un'immagine, un link che reindirizza e e del testo che si andrà a sovrapporre. (obbligatorio
        inserire tutti i campi)
      </h4>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      {uploading && <Spinner animation="border" />}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formSlide1">
          <Form.Label>Slide 1 Immagine</Form.Label>
          <Form.Control type="file" onChange={(e) => handleImageUpload(e, "Slide1")} required />
          {form.Slide1 && (
            <img src={form.Slide1} alt="Slide 1" style={{ width: "100px", marginTop: "10px" }} />
          )}
        </Form.Group>
        <Form.Group controlId="formSlide1Link">
          <Form.Label>Slide 1 Link</Form.Label>
          <Form.Control
            type="text"
            value={form.Slide1Link}
            onChange={(e) => setForm({ ...form, Slide1Link: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formSlide1txt">
          <Form.Label>Slide 1 Testo</Form.Label>
          <Form.Control
            type="text"
            value={form.Slide1txt}
            onChange={(e) => setForm({ ...form, Slide1txt: e.target.value })}
            required
          />
        </Form.Group>
        <hr />
        <Form.Group controlId="formSlide2">
          <Form.Label>Slide 2 Immagine</Form.Label>
          <Form.Control type="file" onChange={(e) => handleImageUpload(e, "Slide2")} required />
          {form.Slide2 && (
            <img src={form.Slide2} alt="Slide 2" style={{ width: "100px", marginTop: "10px" }} />
          )}
        </Form.Group>
        <Form.Group controlId="formSlide2Link">
          <Form.Label>Slide 2 Link</Form.Label>
          <Form.Control
            type="text"
            value={form.Slide2Link}
            onChange={(e) => setForm({ ...form, Slide2Link: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formSlide2txt">
          <Form.Label>Slide 2 Testo</Form.Label>
          <Form.Control
            type="text"
            value={form.Slide2txt}
            onChange={(e) => setForm({ ...form, Slide2txt: e.target.value })}
            required
          />
        </Form.Group>
        <hr />
        <Form.Group controlId="formSlide3">
          <Form.Label>Slide 3 Immagine</Form.Label>
          <Form.Control type="file" onChange={(e) => handleImageUpload(e, "Slide3")} required />
          {form.Slide3 && (
            <img src={form.Slide3} alt="Slide 3" style={{ width: "100px", marginTop: "10px" }} />
          )}
        </Form.Group>
        <Form.Group controlId="formSlide3Link">
          <Form.Label>Slide 3 Link</Form.Label>
          <Form.Control
            type="text"
            value={form.Slide3Link}
            onChange={(e) => setForm({ ...form, Slide3Link: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formSlide3txt">
          <Form.Label>Slide 3 Testo</Form.Label>
          <Form.Control
            type="text"
            value={form.Slide3txt}
            onChange={(e) => setForm({ ...form, Slide3txt: e.target.value })}
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

export default GestioneCarosello;
