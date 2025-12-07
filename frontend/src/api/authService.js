// src/api/authService.js
import axiosInstance from "./axiosInstance";

export async function loginUser(credentials) {
  console.log("Logging in with credentials:", credentials);
  // adapt path if needed: '/auth/login' or '/auth/login' you said auth/login
  const res = await axiosInstance.post("/auth/login", credentials);
  // return full object so caller can use token, user, details
  console.log("Login response data:", res.data);
  return res.data;
}
