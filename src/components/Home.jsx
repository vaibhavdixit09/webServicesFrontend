import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Clients from "./Clients";
import Services from "./Services";
import Projects from "./Projects";
import Capabilities from "./Capabilities";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Clients></Clients>
      <Services></Services>
      <Projects></Projects>
      <Capabilities></Capabilities>
      <FAQSection></FAQSection>
      <Footer></Footer>
    </>
  );
};

export default Home;
