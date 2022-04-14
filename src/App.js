import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Gallery from "./Components/Gallery/Gallery";
import Clients from "./Components/Clients/Clients";
import Quality from "./Components/Quality/Quality";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Pipes from "./Components/Products/Pipes/Pipes";
import Flanges from "./Components/Products/Flanges/Flanges";
import Valves from "./Components/Products/Valves/Valves";
import Fittings from "./Components/Products/Fittings/Fittings";
import Plates from "./Components/Products/Plates/Plates";
import Studbolts from "./Components/Products/Studbolts/Studbolts";

export const scrollBtn = () => {
  window.scrollTo(0, 0);
};

function App() {
  return (
    <div className="App">
      <div className="scroll-btn">
        <i className="fa fa-arrow-circle-up" aria-hidden="true" onClick={scrollBtn}></i>
      </div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="products/pipes" element={<Pipes />} />
          <Route path="products/flanges" element={<Flanges />} />
          <Route path="products/valves" element={<Valves />} />
          <Route path="products/fittings" element={<Fittings />} />
          <Route path="products/plates" element={<Plates />} />
          <Route path="products/studbolts" element={<Studbolts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
