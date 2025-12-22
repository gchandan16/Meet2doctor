import React from "react";
import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux";
export default function GuestRoute({ children }) {

  const  isAuthenticated  = useSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/" replace />; // redirect logged-in users
  }
  return <>{children}</>;//allow all login/register page for guest users
}