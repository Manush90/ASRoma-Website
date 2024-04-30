import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav.jsx";
import Home from "./components/Home.jsx";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Tickets from "./components/Tickets.jsx";
import Rosa from "./components/Rosa.jsx";
import AsromaTeam from "./data/AsromaTeam.json";

function App() {
  return (
    <Router>
      <div>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets/" element={<Tickets />} />
          <Route path="/Rosa/" element={<Rosa giocatori={AsromaTeam} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
