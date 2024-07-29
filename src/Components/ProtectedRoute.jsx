import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ portopio: Portopio, ...rest }) => {
  const isAuthenticated = true;
  return isAuthenticated ? <Portopio {...rest} /> : <Navigate to="/admin" />;
};

export default ProtectedRoute;
