import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </>
  );
}

export default App;
