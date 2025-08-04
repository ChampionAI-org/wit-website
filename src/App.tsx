import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoTestimonial from "./components/VideoTestimonial";
import ValueProps from "./components/ValueProps";
import ProductShowcase from "./components/ProductShowcase";
import TargetAudience from "./components/TargetAudience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoTestimonial videoId="9hNmi9bTof8" />
      <ValueProps />
      <ProductShowcase />
      <TargetAudience />
      <Footer />
    </div>
  );
}

export default App;
