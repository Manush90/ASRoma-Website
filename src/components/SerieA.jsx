import React, { useState, useEffect } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import { firestore } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const SerieA = () => {
  const [classifica, setClassifica] = useState([]);

  useEffect(() => {
    const docRef = doc(firestore, "CalendarioSerieA", "SerieA");

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
          <div className="justify-content-center">
            <h2 className="text-center backgroundseriea text-white">
              Classifica Serie A <br />
              <img
                src="https://upload.wikimedia.org/wikipedia/it/thumb/c/c5/Logo_Serie_A_TIM_2021.svg/1200px-Logo_Serie_A_TIM_2021.svg.png"
                height="90px"
                alt="SA"
                className="mb-2 "
              />
            </h2>

            <Table striped bordered hover responsive className="table-full-width">
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
                      index < 5
                        ? "top-4-row"
                        : index === 5
                        ? "top-5-row"
                        : index === 6
                        ? "top-6-row"
                        : index === 7
                        ? "top-7-row"
                        : index >= classifica.length - 3 && index <= classifica.length - 1
                        ? "bottom-3-row"
                        : squadra.nome === "Roma"
                        ? "roma-row"
                        : ""
                    }
                  >
                    <td>
                      {index + 1}
                      {index < 5 ? (
                        <img className="ms-4" src="/UEFA.png" height="30px" alt="UEFA" />
                      ) : index === 5 || index === 6 ? (
                        <img className="ms-4" src="/UEL.png" height="30px" alt="UEL" />
                      ) : index === 7 ? (
                        <img className="ms-4" src="/UCL.png" height="30px" alt="UCL" />
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
      <hr></hr>
    </Container>
  );
};

export default SerieA;
