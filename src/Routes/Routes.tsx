import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/HomePage/HomePage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<RegisterPage />} />

            </Routes>
        </Router>
    );
}

export default AppRoutes;