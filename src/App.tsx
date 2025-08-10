import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoTestimonial from "./components/VideoTestimonial";
import ValueProps from "./components/ValueProps";
import ProductShowcase from "./components/ProductShowcase";
import TargetAudience from "./components/TargetAudience";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  if (path === "/privacy" || path === "/privacy/") {
    return (
      <div className="min-h-screen">
        <Header />
        <Privacy />
        <Footer />
      </div>
    );
  }
  if (path === "/terms" || path === "/terms/") {
    return (
      <div className="min-h-screen">
        <Header />
        <Terms />
        <Footer />
      </div>
    );
  }

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
