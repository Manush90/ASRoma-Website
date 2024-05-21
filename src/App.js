import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Tickets from "./components/Tickets";
import Rosa from "./components/Rosa";
import AsromaTeam from "./data/AsromaTeam.json";
import TabsSerieA from "./components/TabsSerieA";
import VideoHighlights from "./components/VideoHighlights";
import Alerts from "./components/Alerts";
import MyCountdown from "./components/MyCountdown";
import Europa from "./components/Europa";
import Newsletter from "./components/Newsletter";
import NewsPage from "./components/NewsPage";
import Article from "./components/Article";
import Article2 from "./components/Article2";
import Allenamenti from "./components/Allenamenti";
import Login from "./components/Login";
import Registration from "./components/Registration";
import "./App.css";

function App() {
  const targetDate = "2024-05-26T20:45:00";
  const [user, setUser] = useState(null);
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    setWelcomeMessage(`Benvenuto, ${loggedInUser.email}!`);
    localStorage.setItem("user", JSON.stringify(loggedInUser));
  };

  const handleRegistration = (registeredUser) => {
    setUser(registeredUser);
    setWelcomeMessage(`Benvenuto, ${registeredUser.email}!`);
    localStorage.setItem("user", JSON.stringify(registeredUser));
  };

  const handleLogout = () => {
    setUser(null);
    setWelcomeMessage("");
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <div>
        <Alerts />
        <MyNav welcomeMessage={welcomeMessage} onLogout={handleLogout} />
        <MyCountdown targetDate={targetDate} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/article" element={<Article />} />
          <Route path="/article2" element={<Article2 />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/allenamenti" element={<Allenamenti />} />
          <Route path="/rosa" element={<Rosa giocatori={AsromaTeam} />} />
          <Route path="/TabsSerieA" element={<TabsSerieA />} />
          <Route path="/EuropaLeague" element={<Europa />} />
          <Route path="/highlights" element={<VideoHighlights />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Registration onRegister={handleRegistration} />} />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
