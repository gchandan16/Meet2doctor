import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
export default function GuestRoute({ children }) {
  const {isAuthenticated} = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/" replace />; // redirect logged-in users
  }
  return <>{children}</>;//allow all login/register page for guest users
}