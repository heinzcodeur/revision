import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Countries from "./components/Countries";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/countries" element={<Countries/>} />
                /* path="*" fonctionne di jamais l'url ne correspond a rien de déclaré au dessus */
                <Route path="/*" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;