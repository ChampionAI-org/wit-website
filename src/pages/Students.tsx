import React from "react";
import Hero from "../components/Hero";
import VideoTestimonial from "../components/VideoTestimonial";
import ValueProps from "../components/ValueProps";
import ProductShowcase from "../components/ProductShowcase";
import TargetAudience from "../components/TargetAudience";

export default function Students() {
  return (
    <div>
      <Hero />
      <VideoTestimonial videoId="9hNmi9bTof8" />
      <ValueProps />
      <ProductShowcase />
      <TargetAudience />
    </div>
  );
}
