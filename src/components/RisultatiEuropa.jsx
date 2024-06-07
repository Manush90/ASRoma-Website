import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { firestore } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const RisultatiEuropa = () => {
  const [partite, setPartite] = useState([]);

  useEffect(() => {
    const docRef = doc(firestore, "CalendarioSerieA", "EuropaLeague");

    const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const partiteData = docSnapshot.data().partite || [];
        setPartite(partiteData);
      } else {
        console.error("Documento non trovato");
      }
    });

    return () => unsubscribe();
  }, []);

  // Filtra le partite per quelle della Roma in Europa League
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
                  {partita.Giornata}° Giornata
                  <br></br> {partita.Marcatori}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RisultatiEuropa;
