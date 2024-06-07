import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, user, requiredRole }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
