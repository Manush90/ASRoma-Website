import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthProvider"; // Assicurati che il percorso sia corretto

const PrivateRoute = ({ children, requiredRole }) => {
  const { currentUser, isAdmin } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (requiredRole === "admin" && !isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
