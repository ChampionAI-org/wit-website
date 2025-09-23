import React from "react";
import Hero from "../components/Hero";
import VideoTestimonial from "../components/VideoTestimonial";
import ValueProps from "../components/ValueProps";
import ProductShowcase from "../components/ProductShowcase";
import TargetAudience from "../components/TargetAudience";

export default function Students() {
  return (
    <div>
      <section id="students-hero" className="snap-start snap-always">
        <Hero />
      </section>
      <section id="students-testimonial" className="snap-start snap-always">
        <VideoTestimonial videoId="9hNmi9bTof8" />
      </section>
      <section id="students-values" className="snap-start snap-always">
        <ValueProps />
      </section>
      <section id="students-product" className="snap-start snap-always">
        <ProductShowcase />
      </section>
      <section id="students-target" className="snap-start snap-always">
        <TargetAudience />
      </section>
    </div>
  );
}
