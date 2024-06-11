import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { firestore } from "../firebase";
import { doc, onSnapshot, getDoc, updateDoc } from "firebase/firestore";

const Risultati = () => {
  const [partite, setPartite] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false); // Inizialmente falso

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User from localStorage:", user); // Log per verificare l'utente dal localStorage
    if (user && user.role === "admin") {
      setIsAdmin(true);
      console.log("User is admin:", user.role); // Log per verificare il ruolo dell'utente
    } else {
      console.log("User is not admin or not logged in");
    }

    const docRef = doc(firestore, "CalendarioSerieA", "SerieA");

    const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const partiteData = docSnapshot.data().partite || [];
        setPartite(partiteData);
        console.log("Partite data:", partiteData); // Log per verificare i dati delle partite
      } else {
        console.error("Documento non trovato");
      }
    });

    return () => unsubscribe();
  }, []);

  const eliminaRisultato = async (index) => {
    try {
      const docRef = doc(firestore, "CalendarioSerieA", "SerieA");
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        const partite = data.partite || [];
        partite.splice(index, 1); // Rimuove il risultato dall'array

        await updateDoc(docRef, { partite });
        setPartite(partite); // Aggiorna lo stato locale
        console.log("Risultato eliminato, nuove partite:", partite); // Log per verificare l'eliminazione
      } else {
        console.error("Documento non trovato");
      }
    } catch (error) {
      console.error("Errore durante l'eliminazione del risultato della partita:", error);
    }
  };

  // Filtra le partite per quelle della Roma
  const partiteRoma = partite.filter(
    (partita) => partita.SquadraCasa === "Roma" || partita.SquadraTrasferta === "Roma"
  );

  return (
    <Container>
      <Row>
        {partiteRoma.map((partita, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src="/1giornata.jpg" />
              <Card.Body>
                <Card.Title className="text-center newfont">
                  <strong>{`${partita.SquadraCasa} ${partita.GolCasa} - ${partita.GolTrasferta} ${partita.SquadraTrasferta}`}</strong>
                </Card.Title>
                <Card.Text className="text-center">
                  {partita.Giornata}°Giornata
                  <br></br> {partita.Marcatori}
                </Card.Text>
                {isAdmin && (
                  <Button
                    variant="danger"
                    className="w-100"
                    onClick={() => eliminaRisultato(index)}
                  >
                    Elimina risultato
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Risultati;
