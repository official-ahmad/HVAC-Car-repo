import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Feature from "./Feature";
import Vehicle from "./Vehicle";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Feature />
      <Vehicle />
      <About />
      <Contact /> 
    </>
  );
}

export default App;
