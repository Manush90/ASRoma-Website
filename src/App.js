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
import Allenamenti from "./components/Allenamenti";
import Login from "./components/Login";
import Registration from "./components/Registration";
import AdminPage from "./components/AdminPage";
import PrivateRoute from "./components/PrivateRoute";
import InserimentoRisultati from "./components/InserimentoRisultati";
import Profile from "./components/Profile";
import Stadium from "./components/Stadium";
import Staff from "./components/Staff.jsx";
import InserimentoNotizie from "./components/InserimentoNotizie";
import ArticleDetail from "./components/ArticleDetail";
import InserimentoNextMatch from "./components/InserimentoNextMatch";
import { AuthProvider } from "./AuthProvider";
import AlertFix from "./components/AlertFix";
import "./App.css";
import GestioneCarosello from "./components/GestioneCarosello.jsx";

function App() {
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
    <AuthProvider>
      <Router>
        <div>
          <Alerts />
          <MyNav welcomeMessage={welcomeMessage} user={user} onLogout={handleLogout} />
          <MyCountdown />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/Stadium" element={<Stadium />} />
            <Route path="/allenamenti" element={<Allenamenti />} />
            <Route path="/rosa" element={<Rosa giocatori={AsromaTeam} />} />
            <Route path="/Allenatore" element={<Staff giocatori={Staff} />} />
            <Route path="/TabsSerieA" element={<TabsSerieA />} />
            <Route path="/EuropaLeague" element={<Europa />} />
            <Route path="/highlights" element={<VideoHighlights />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Registration onRegister={handleRegistration} />} />
            <Route
              path="/adminPage"
              element={
                <PrivateRoute requiredRole="admin">
                  <AdminPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/InserimentoRisultati"
              element={
                <PrivateRoute requiredRole="admin">
                  <InserimentoRisultati />
                </PrivateRoute>
              }
            />
            <Route
              path="/Profile"
              element={
                <PrivateRoute>
                  <Profile user={user} />
                </PrivateRoute>
              }
            />
            <Route
              path="/InserimentoNotizie"
              element={
                <PrivateRoute requiredRole="admin">
                  <InserimentoNotizie />
                </PrivateRoute>
              }
            />
            <Route path="/Article/:id" element={<ArticleDetail />} />
            <Route
              path="/InserimentoNextMatch"
              element={
                <PrivateRoute requiredRole="admin">
                  <InserimentoNextMatch />
                </PrivateRoute>
              }
            />
            <Route
              path="/AlertFix"
              element={
                <PrivateRoute requiredRole="admin">
                  <AlertFix />
                </PrivateRoute>
              }
            />

            <Route
              path="/GestioneCarosello"
              element={
                <PrivateRoute requiredRole="admin">
                  <GestioneCarosello />
                </PrivateRoute>
              }
            />
          </Routes>
          <Newsletter />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
