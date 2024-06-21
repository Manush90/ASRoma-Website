import React, { useState, useEffect } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import { firestore } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const EuropaClassifica = () => {
  const [classifica, setClassifica] = useState([]);

  useEffect(() => {
    const docRef = doc(firestore, "CalendarioSerieA", "EuropaLeague");

    const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const partite = docSnapshot.data().partite || [];
        aggiornaClassifica(partite);
      } else {
        console.error("Documento non trovato");
      }
    });

    return () => unsubscribe();
  }, []);

  const aggiornaClassifica = (partite) => {
    const nuovaClassifica = {};

    partite.forEach((partita) => {
      const golCasa = parseInt(partita.GolCasa, 10);
      const golTrasferta = parseInt(partita.GolTrasferta, 10);

      if (!nuovaClassifica[partita.SquadraCasa]) {
        nuovaClassifica[partita.SquadraCasa] = {
          vinte: 0,
          pareggiate: 0,
          perse: 0,
          golFatti: 0,
          golSubiti: 0,
          punti: 0,
        };
      }

      if (!nuovaClassifica[partita.SquadraTrasferta]) {
        nuovaClassifica[partita.SquadraTrasferta] = {
          vinte: 0,
          pareggiate: 0,
          perse: 0,
          golFatti: 0,
          golSubiti: 0,
          punti: 0,
        };
      }

      nuovaClassifica[partita.SquadraCasa].golFatti += golCasa;
      nuovaClassifica[partita.SquadraCasa].golSubiti += golTrasferta;

      nuovaClassifica[partita.SquadraTrasferta].golFatti += golTrasferta;
      nuovaClassifica[partita.SquadraTrasferta].golSubiti += golCasa;

      if (golCasa > golTrasferta) {
        nuovaClassifica[partita.SquadraCasa].vinte++;
        nuovaClassifica[partita.SquadraCasa].punti += 3;
        nuovaClassifica[partita.SquadraTrasferta].perse++;
      } else if (golCasa < golTrasferta) {
        nuovaClassifica[partita.SquadraTrasferta].vinte++;
        nuovaClassifica[partita.SquadraTrasferta].punti += 3;
        nuovaClassifica[partita.SquadraCasa].perse++;
      } else {
        nuovaClassifica[partita.SquadraCasa].pareggiate++;
        nuovaClassifica[partita.SquadraCasa].punti += 1;
        nuovaClassifica[partita.SquadraTrasferta].pareggiate++;
        nuovaClassifica[partita.SquadraTrasferta].punti += 1;
      }
    });

    const classificaArray = Object.keys(nuovaClassifica)
      .map((nome) => ({
        nome,
        ...nuovaClassifica[nome],
        differenzaReti: nuovaClassifica[nome].golFatti - nuovaClassifica[nome].golSubiti,
        giocate:
          nuovaClassifica[nome].vinte +
          nuovaClassifica[nome].pareggiate +
          nuovaClassifica[nome].perse,
      }))
      .sort((a, b) => b.punti - a.punti || b.differenzaReti - a.differenzaReti);

    setClassifica(classificaArray);
  };

  return (
    <Container fluid className="sfondo">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <div>
            <h2 className="text-center backgroundEuropa text-white">
              Classifica Girone <br />
              <img
                src="https://upload.wikimedia.org/wikipedia/it/2/21/UEFA_Europa_League_logo_%282021%29.svg"
                height="90px"
                alt="Europa League"
                className="mb-2"
              />
            </h2>
            <Table striped bordered hover responsive>
              <thead>
                <tr className="text-center">
                  <th>Posizione</th>
                  <th>Squadra</th>
                  <th>Punti</th>
                  <th className="d-none d-sm-table-cell">Vinte</th>
                  <th className="d-none d-sm-table-cell">Pareggiate</th>
                  <th className="d-none d-sm-table-cell">Perse</th>
                  <th className="d-none d-sm-table-cell">Gol +</th>
                  <th className="d-none d-sm-table-cell">Gol -</th>
                  <th>Giocate</th>
                  <th>Diff. Reti</th>
                </tr>
              </thead>
              <tbody>
                {classifica.map((squadra, index) => (
                  <tr
                    key={index}
                    className={
                      index < 2
                        ? "top-4-row"
                        : index === 1
                        ? "top-5-row"
                        : index === 6
                        ? "top-6-row"
                        : index === 7
                        ? "top-7-row"
                        : index >= classifica.length - 1 && index <= classifica.length - 1
                        ? "bottom-3-row"
                        : squadra.nome === "Roma"
                        ? "roma-row"
                        : ""
                    }
                  >
                    <td>
                      {index + 1}
                      {index < 2 ? (
                        <img className="ms-3" src="/garrow.png" height="30px" alt="UEFA" />
                      ) : index === 2 || index === 2 ? (
                        <img className="ms-4" src="UCL.png" height="30px" alt="UEL" />
                      ) : index === 3 ? (
                        <img className="ms-3" src="rarrow.png" height="30px" alt="UCL" />
                      ) : null}
                    </td>

                    <td>{squadra.nome}</td>
                    <td className="text-center">{squadra.punti}</td>
                    <td className="text-center d-none d-sm-table-cell">{squadra.vinte}</td>
                    <td className="text-center d-none d-sm-table-cell">{squadra.pareggiate}</td>
                    <td className="text-center d-none d-sm-table-cell">{squadra.perse}</td>
                    <td className="text-center d-none d-sm-table-cell">{squadra.golFatti}</td>
                    <td className="text-center d-none d-sm-table-cell">{squadra.golSubiti}</td>
                    <td className="text-center">{squadra.giocate}</td>
                    <td className="text-center">{squadra.differenzaReti}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EuropaClassifica;
