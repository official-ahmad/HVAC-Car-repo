import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Feature from "./Feature";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Feature />
    </>
  );
}

export default App;
