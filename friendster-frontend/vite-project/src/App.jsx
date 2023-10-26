import React from "react";
import './App.css'
import  Navbar  from "./components/Navbar"
import Footer from "./components/Footer"
import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home';
import  Results  from './pages/Results';


function App() {
  return (
      <div className = "App">
        <Navbar/>
        <h1>Vite + React</h1>
        <Footer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Results" element={<Results />} />
        </Routes>
      </div>
  );
}

export default App
