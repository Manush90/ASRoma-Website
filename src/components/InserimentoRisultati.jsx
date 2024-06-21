import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { firestore } from "../firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

const aggiungiRisultatoPartita = async (nuovoRisultato, competizione, setMessaggio) => {
  try {
    const documento = competizione === "SerieA" ? "SerieA" : "EuropaLeague";
    const docRef = doc(firestore, "CalendarioSerieA", documento);
    console.log("Percorso del documento:", docRef.path);

    const docSnapshot = await getDoc(docRef);
    console.log("Documento esiste:", docSnapshot.exists());

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      const partite = data.partite || [];
      partite.push(nuovoRisultato);
      console.log("Partite aggiornate:", partite);

      await updateDoc(docRef, { partite });
      console.log("Documento aggiornato con:", { partite });
    } else {
      await setDoc(docRef, { partite: [nuovoRisultato] });
      console.log("Nuovo documento creato con partite:", { partite: [nuovoRisultato] });
    }

    setMessaggio("Partita inserita con successo!");
  } catch (error) {
    setMessaggio("Problema con l'inserimento della partita: " + error.message);
    console.error("Errore durante l'aggiunta del risultato della partita a Firestore:", error);
  }
};

const InserimentoRisultati = () => {
  const [nuovoRisultato, setNuovoRisultato] = useState({
    Giornata: 1,
    Incontro: 1,
    SquadraCasa: "",
    SquadraTrasferta: "",
    GolCasa: 0,
    GolTrasferta: 0,
    Marcatori: "",
  });
  const [competizione, setCompetizione] = useState("SerieA");
  const [messaggio, setMessaggio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    aggiungiRisultatoPartita(nuovoRisultato, competizione, setMessaggio);
    setNuovoRisultato({
      Giornata: 1,
      Incontro: 1,
      SquadraCasa: "",
      SquadraTrasferta: "",
      GolCasa: 0,
      GolTrasferta: 0,
      Marcatori: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuovoRisultato((prev) => ({ ...prev, [name]: value }));
  };

  const handleCompetizioneChange = (e) => {
    setCompetizione(e.target.value);
  };

  return (
    <Container className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="form-container mt-4">
        <h1>Inserimento risultati</h1>
        <label className="customcolor">
          Competizione
          <select name="competizione" value={competizione} onChange={handleCompetizioneChange}>
            <option value="SerieA">Serie A</option>
            <option value="EuropaLeague">Europa League</option>
          </select>
        </label>
        <label className="customcolor">
          Giornata
          <input
            type="number"
            name="Giornata"
            value={nuovoRisultato.Giornata}
            onChange={handleChange}
          />
        </label>
        <label className="customcolor">
          Incontro
          <input
            type="number"
            name="Incontro"
            value={nuovoRisultato.Incontro}
            onChange={handleChange}
          />
        </label>
        <label className="customcolor">
          Team Casa
          <input
            type="text"
            name="SquadraCasa"
            value={nuovoRisultato.SquadraCasa}
            onChange={handleChange}
          />
        </label>
        <label className="customcolor">
          Team Ospite
          <input
            type="text"
            name="SquadraTrasferta"
            value={nuovoRisultato.SquadraTrasferta}
            onChange={handleChange}
          />
        </label>
        <label className="customcolor">
          Gol Casa
          <input
            type="number"
            name="GolCasa"
            value={nuovoRisultato.GolCasa}
            onChange={handleChange}
          />
        </label>
        <label className="customcolor">
          Gol Ospiti
          <input
            type="number"
            name="GolTrasferta"
            value={nuovoRisultato.GolTrasferta}
            onChange={handleChange}
          />
        </label>
        <label className="customcolor">
          Marcatori
          <input
            type="text"
            name="Marcatori"
            value={nuovoRisultato.Marcatori}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Aggiungi Risultato</button>
        {messaggio && <p className="mt-3 successmessage">{messaggio}</p>}
      </form>
    </Container>
  );
};

export default InserimentoRisultati;
