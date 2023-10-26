import React from "react";
import './App.css'
import  Navbar  from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  return (
      <div className = "App">
        <Navbar/>
        <h1>Vite + React</h1>
        <Footer/>
      </div>
  );
}

export default App
