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
import Article from "./components/Articles/Article";
import Article2 from "./components/Articles/Article2";
import Allenamenti from "./components/Allenamenti";
import Login from "./components/Login";
import Registration from "./components/Registration";
import AdminPage from "./components/AdminPage"; // Importa la pagina amministratore
import PrivateRoute from "./components/PrivateRoute"; // Importa il componente PrivateRoute
import "./App.css";
import InserimentoRisultati from "./components/InserimentoRisultati";
import Profile from "./components/Profile";
import Stadium from "./components/Stadium";

function App() {
  const targetDate = "2024-07-26T20:45:00";
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
    localStorage.removeItem("welcomeMessage");
  };

  return (
    <Router>
      <div>
        <Alerts />
        <MyNav welcomeMessage={welcomeMessage} user={user} onLogout={handleLogout} />
        <MyCountdown targetDate={targetDate} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/Articles/Article" element={<Article />} />
          <Route path="/Articles/Article2" element={<Article2 />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/Stadium" element={<Stadium />} />
          <Route path="/allenamenti" element={<Allenamenti />} />
          <Route path="/rosa" element={<Rosa giocatori={AsromaTeam} />} />
          <Route path="/TabsSerieA" element={<TabsSerieA />} />
          <Route path="/EuropaLeague" element={<Europa />} />
          <Route path="/highlights" element={<VideoHighlights />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Registration onRegister={handleRegistration} />} />
          <Route
            path="/adminPage"
            element={
              <PrivateRoute user={user} requiredRole="admin">
                <AdminPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/InserimentoRisultati"
            element={
              <PrivateRoute user={user} requiredRole="admin">
                <InserimentoRisultati />
              </PrivateRoute>
            }
          />
          <Route
            path="/Profile"
            element={
              <PrivateRoute user={user}>
                <Profile user={user} />
              </PrivateRoute>
            }
          />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
