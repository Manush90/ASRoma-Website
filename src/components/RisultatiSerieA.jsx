import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { firestore } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const RisultatiSerieA = () => {
  const [risultati, setRisultati] = useState({});

  useEffect(() => {
    const docRef = doc(firestore, "CalendarioSerieA", "SerieA");

    const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        console.log("Dati del documento:", data); // Log migliorato
        if (data.partite) {
          const giornate = data.partite.reduce((acc, partita) => {
            const { Giornata } = partita;
            if (!acc[Giornata]) {
              acc[Giornata] = [];
            }
            acc[Giornata].push(partita);
            return acc;
          }, {});
          setRisultati(giornate);
        }
      } else {
        console.error("Documento non trovato");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Container className="d-flex flex-wrap justify-content-center">
      {Object.keys(risultati).map((giornata) => (
        <Card key={giornata} className="m-3" style={{ width: "18rem" }}>
          <Card.Header>Giornata {giornata}</Card.Header>
          <Card.Body>
            {risultati[giornata].map((partita, index) => (
              <div key={index} className="mb-2">
                <strong>{partita.SquadraCasa}</strong> {partita.GolCasa} - {partita.GolTrasferta}{" "}
                <strong>{partita.SquadraTrasferta}</strong>
              </div>
            ))}
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default RisultatiSerieA;
