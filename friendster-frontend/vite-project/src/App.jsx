import React from "react";
import './App.css'
import  Navbar  from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home';
import  Results  from './pages/Results';


function App() {
  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Results" element={<Results />} />
        </Routes>
      </div>
  );
}

export default App
