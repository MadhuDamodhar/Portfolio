import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import SkillsSection from "./Skills/SkillsSection";
import Project from "./Project/Project"
import ContactMe from "./ContactMe/ContactMe";
import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <SkillsSection/>
    <Project/>
    <ContactMe/>
    </div>
  );
}

export default App;
