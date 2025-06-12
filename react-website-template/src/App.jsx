import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeartureSection from "./components/FeartureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeartureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
