import React from "react";

import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import RoadMap from "./components/RoadMap";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Brands />
      <Features />
      <About />
      <RoadMap />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
