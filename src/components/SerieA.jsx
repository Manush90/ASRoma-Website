import React, { useState, useEffect } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import partite from "../data/Calendario.json";

const Classifica = () => {
  const [classifica, setClassifica] = useState([]);
  const aggiornaClassifica = () => {
    const nuovaClassifica = {};

    partite.forEach((partita) => {
      partita.Giornata = parseInt(partita.Giornata);
      partita.Incontro = parseInt(partita.Incontro);
      partita.GolCasa = parseInt(partita.GolCasa ? partita.GolCasa : 0);
      partita.GolTrasferta = parseInt(partita.GolTrasferta ? partita.GolTrasferta : 0);

      nuovaClassifica[partita.SquadraCasa] = nuovaClassifica[partita.SquadraCasa] || {
        vinte: 0,
        pareggiate: 0,
        perse: 0,
        golFatti: 0,
        golSubiti: 0,
        punti: 0,
      };
      nuovaClassifica[partita.SquadraCasa].golFatti += partita.GolCasa;
      nuovaClassifica[partita.SquadraCasa].golSubiti += partita.GolTrasferta;
      if (partita.GolCasa > partita.GolTrasferta) {
        nuovaClassifica[partita.SquadraCasa].vinte++;
        nuovaClassifica[partita.SquadraCasa].punti += 3;
      } else if (partita.GolCasa < partita.GolTrasferta) {
        nuovaClassifica[partita.SquadraCasa].perse++;
      } else {
        nuovaClassifica[partita.SquadraCasa].pareggiate++;
        nuovaClassifica[partita.SquadraCasa].punti += 1;
      }

      nuovaClassifica[partita.SquadraTrasferta] = nuovaClassifica[partita.SquadraTrasferta] || {
        vinte: 0,
        pareggiate: 0,
        perse: 0,
        golFatti: 0,
        golSubiti: 0,
        punti: 0,
      };
      nuovaClassifica[partita.SquadraTrasferta].golFatti += partita.GolTrasferta;
      nuovaClassifica[partita.SquadraTrasferta].golSubiti += partita.GolCasa;
      if (partita.GolCasa < partita.GolTrasferta) {
        nuovaClassifica[partita.SquadraTrasferta].vinte++;
        nuovaClassifica[partita.SquadraTrasferta].punti += 3;
      } else if (partita.GolCasa > partita.GolTrasferta) {
        nuovaClassifica[partita.SquadraTrasferta].perse++;
      } else {
        nuovaClassifica[partita.SquadraTrasferta].pareggiate++;
        nuovaClassifica[partita.SquadraTrasferta].punti += 1;
      }
    });

    const classificaArray = Object.keys(nuovaClassifica)
      .map((nome) => ({
        nome,
        ...nuovaClassifica[nome],
        differenzaReti: nuovaClassifica[nome].golFatti - nuovaClassifica[nome].golSubiti,
      }))
      .sort((a, b) => b.punti - a.punti);

    setClassifica(classificaArray);
  };

  useEffect(() => {
    aggiornaClassifica();
  }, []);

  return (
    <Container fluid className="sfondo">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <div className="justify-content-center">
            <h2 className="text-center mt-2 text-white">
              Classifica Serie A <br></br>
              <img
                src="https://upload.wikimedia.org/wikipedia/it/thumb/c/c5/Logo_Serie_A_TIM_2021.svg/1200px-Logo_Serie_A_TIM_2021.svg.png"
                height="90px"
                alt="SA"
              />
            </h2>

            <Table striped bordered hover responsive rounded className="table-full-width">
              <thead>
                <tr className="text-center">
                  <th>Posizione</th>
                  <th>Squadra</th>
                  <th>Punti</th>
                  <th>Vinte</th>
                  <th>Pareggiate</th>
                  <th>Perse</th>
                  <th>Gol +</th>
                  <th>Gol -</th>
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
                    <td className="text-center">{squadra.vinte}</td>
                    <td className="text-center">{squadra.pareggiate}</td>
                    <td className="text-center">{squadra.perse}</td>
                    <td className="text-center">{squadra.golFatti}</td>
                    <td className="text-center">{squadra.golSubiti}</td>
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

export default Classifica;
