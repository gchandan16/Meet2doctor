// src/context/AuthContext.jsx

import React, { createContext,useContext, useState, useEffect } from "react";
export const AuthContext = createContext({
    user: null,
    token: null,
    role: null,
    details: null,
    login:async()=>{},
    logout:()=>{},
    isAuthenticated:false,
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('user') || null);
    const [token,setToken] = useState(localStorage.getItem('token') || null);
    const[role,setRole] = useState(localStorage.getItem('role') || null);
    const [details,setDetails] = useState(localStorage.getItem('details') || null);

    useEffect(()=>{if(token) localStorage.setItem('token', token);else localStorage.removeItem('token');},[token]);
    useEffect(()=>{if(user) localStorage.setItem('user', user);else localStorage.removeItem('user');},[user]);
    useEffect(()=>{if(role) localStorage.setItem('role', role);else localStorage.removeItem('role');},[role]);  
    useEffect(()=>{if(details) localStorage.setItem('details', details);else localStorage.removeItem('details');},[details]);


    //login expect backend response object
    const login =({token :respToken,user:respUser, role:respRole, details:respDetails})=>{
        setToken(respToken || respDetails?.token || null);
        setUser(respUser || null);
        setRole(respRole || (respUser && respUser.role) || null);
        setDetails(respDetails || null);
    };
    
    const logout=()=>{
        setToken(null);
        setUser(null);
        setRole(null);
        setDetails(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        localStorage.removeItem('details');

        
    };
     const isAuthenticated=!!token; 

    return (
        <AuthContext.Provider value={{ user, token, role, details, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );

};
// convenience hook
export const useAuth = () => useContext(AuthContext)