import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav.jsx";
import Home from "./components/Home.jsx";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Tickets from "./components/Tickets.jsx";
import Rosa from "./components/Rosa.jsx";
import AsromaTeam from "./data/AsromaTeam.json";
import TabsSerieA from "./components/TabsSerieA.jsx";
import VideoHighlights from "./components/VideoHighlights.jsx";
import Alerts from "./components/Alerts.jsx";
import MyCountdown from "./components/MyCountdown.jsx";
import Europa from "./components/Europa.jsx";
import Newsletter from "./components/Newsletter.jsx";

function App() {
  const targetDate = "2024-05-19T20:45:00";

  return (
    <Router>
      <div>
        <Alerts />
        <MyNav />
        <MyCountdown targetDate={targetDate} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets/" element={<Tickets />} />
          <Route path="/Rosa/" element={<Rosa giocatori={AsromaTeam} />} />
          <Route path="/TabsSerieA/" element={<TabsSerieA />} />
          <Route path="/EuropaLeague/" element={<Europa />} />
          <Route path="/Highlights/" element={<VideoHighlights />} />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
