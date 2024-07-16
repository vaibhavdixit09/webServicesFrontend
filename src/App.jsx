import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import "./index.css";
import HeroSection from "./components/HeroSection.jsx";
import Clients from "./components/Clients.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Capabilities from "./components/Capabilities.jsx";
import FAQSection from "./components/FAQSection.jsx";
import Footer from "./components/Footer.jsx";
import Form from "./components/Form.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
