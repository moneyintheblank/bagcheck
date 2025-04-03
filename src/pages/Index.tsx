
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import BrandCheck from "../components/BrandCheck";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <BrandCheck />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
