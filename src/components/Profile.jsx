import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase"; // Assicurati di configurare Firebase e di esportare auth dal tuo file firebase.js

const Profile = ({ user }) => {
  const [email, setEmail] = useState(user?.email || "");
  const [message, setMessage] = useState("");

  const handlePasswordReset = () => {
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setMessage("Controlla la tua email per il link di reimpostazione della password.");
        })
        .catch((error) => {
          setMessage(`Errore nel recupero della password: ${error.message}`);
        });
    } else {
      setMessage("Inserisci una email valida.");
    }
  };

  return (
    <div className="profile-container text-center mt-2 mb-2">
      <h2 className="customcolor">Profilo Utente</h2>
      <p>Email: {email}</p>
      <h3 className="customcolor">Recupera Password</h3>
      <button onClick={handlePasswordReset}>Recupera Password</button>
      {message && <p className="customcolor2">{message}</p>}
    </div>
  );
};

export default Profile;
