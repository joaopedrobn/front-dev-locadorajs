import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import LandingPage from './pages/LandingPage';
import Login from "./pages/Login";
import Cliente from "./pages/Cliente"
import ListaFilmes from "./pages/ListaFilmes"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cliente" element={<Cliente />} />
                <Route path="/listafilmes" element={<ListaFilmes />} />
            </Routes>
        </BrowserRouter>
    );
}