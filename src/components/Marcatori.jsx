import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

const Marcatori = () => {
  // Dati dei marcatori (puoi sostituire con i dati reali)
  const marcatori = [
    { nome: "Giocatore 1", squadra: "Squadra 1", gol: 0, assist: 0, presenze: 0 },
    { nome: "Giocatore 2", squadra: "Squadra 2", gol: 0, assist: 0, presenze: 0 },
    { nome: "Giocatore 3", squadra: "Squadra 1", gol: 0, assist: 0, presenze: 0 },
    { nome: "Giocatore 4", squadra: "Squadra 3", gol: 0, assist: 0, presenze: 0 },
    { nome: "Giocatore 5", squadra: "Squadra 2", gol: 0, assist: 0, presenze: 0 },
    { nome: "Giocatore 6", squadra: "Squadra 3", gol: 0, assist: 0, presenze: 0 },
    { nome: "Giocatore 7", squadra: "Squadra 1", gol: 0, assist: 0, presenze: 0 },
    { nome: "Giocatore 8", squadra: "Squadra 2", gol: 0, assist: 0, presenze: 0 },
    { nome: "Giocatore 9", squadra: "Squadra 3", gol: 0, assist: 0, presenze: 0 },
    { nome: "Giocatore 10", squadra: "Squadra 1", gol: 0, assist: 0, presenze: 0 },
  ];

  return (
    <Container className="sfondo1">
      <Row>
        <Col>
          <h2 className="text-center text-white">Marcatori</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Squadra</th>
                <th>Gol</th>
                <th>Assist</th>
                <th>Presenze</th>
              </tr>
            </thead>
            <tbody>
              {marcatori.map((giocatore, index) => (
                <tr key={index}>
                  <td>{giocatore.nome}</td>
                  <td>{giocatore.squadra}</td>
                  <td>{giocatore.gol}</td>
                  <td>{giocatore.assist}</td>
                  <td>{giocatore.presenze}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Marcatori;
