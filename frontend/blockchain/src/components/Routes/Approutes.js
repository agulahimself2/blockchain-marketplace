import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../login";
import Signup from "../signUp";
import UserDashboard from "../Dashboard/userDashboard"; // Corrected import path


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
    );
    
}
export default AppRoutes;