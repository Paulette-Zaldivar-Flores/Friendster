import React from "react";
import './App.css'
import { Routes } from 'react-router-dom';
import Router from './Routes'

function App() {
  return (
      <div className = "App">
        <Routes>
          <Router/>
        </Routes>
      </div>
  );
}

export default App
