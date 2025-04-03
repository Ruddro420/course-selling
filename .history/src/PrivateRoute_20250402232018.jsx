import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Retrieve the phone number from localStorage
  const userPhone = localStorage.getItem("signUp");
  
  // Check if the phone number exists in localStorage
  const isAuthenticated = userPhone !== null;

  // If authenticated, render the outlet (page content), otherwise redirect to login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
