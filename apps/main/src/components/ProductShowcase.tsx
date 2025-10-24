"use client";
import React, { useState } from "react";
import { Brain, Users, Zap } from "lucide-react";
import AndroidTestModal from "./AndroidTestModal";
import ProductCard from "./ProductCard";
import { AnimateIn, StaggerIn } from "./Animate";
import WaitlistModal from "./WaitlistModal";

export default function ProductShowcase() {
  const [isAndroidModalOpen, setIsAndroidModalOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const products = {
    student: {
      icon: Brain,
      title: "Student Agent",
      description: "Your personal AI assistant for academic success",
      features: [
        "Assignment tracking & reminders",
        "Smart scheduling & time blocking",
        "Study session planning",
        "Progress monitoring",
        "Executive function coaching",
        "LMS integration (when available)",
      ],
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
    },
    parent: {
      icon: Users,
      title: "Parent Agent",
      description: "Stay connected and support your student's journey",
      features: [
        "Real-time progress updates",
        "Task assignment & monitoring",
        "Communication with student agent",
        "Manage family calendar events",
        "Goal setting & tracking",
        "LMS integration (when available)",
      ],
      gradient: "from-purple-500 to-pink-500",
      popular: false,
    },
    bundle: {
      icon: Zap,
      title: "Student + Parent Agents",
      description: "Complete family support system with interconnected agents",
      features: [
        "Everything in Student Agent",
        "Everything in Parent Agent",
        "Seamless agent communication",
        "Family dashboard & insights",
        "Priority support",
        "Advanced analytics",
      ],
      gradient: "from-orange-500 to-red-500",
      popular: true,
    },
  };

  return (
    <section className="py-24 bg-wit-light dark:bg-wit-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateIn direction="left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Start Free. Choose your Agent.
            </h2>
          </AnimateIn>
          <AnimateIn direction="left" delay={0.05}>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
              Individual agents or complete family ecosystem—designed to grow with
              your needs
            </p>
          </AnimateIn>
        </div>

        {/* Product Cards Grid */}
        <StaggerIn direction="left" className="grid lg:grid-cols-3 gap-12 mb-12">
          {Object.entries(products).map(([key, product]) => (
            <ProductCard
              key={key}
              icon={product.icon}
              title={product.title}
              description={product.description}
              features={product.features}
              gradient={product.gradient}
              popular={product.popular}
            />
          ))}
        </StaggerIn>

        {/* Waitlist CTA */}
        <StaggerIn direction="left" className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <button
            onClick={() => setIsWaitlistOpen(true)}
            className="flex items-center justify-center bg-zinc-900 hover:bg-black text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Early Access
          </button>
        </StaggerIn>
      </div>

      {/* Android Test Modal */}
      <AndroidTestModal
        isOpen={isAndroidModalOpen}
        onClose={() => setIsAndroidModalOpen(false)}
      />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </section>
  );
}
