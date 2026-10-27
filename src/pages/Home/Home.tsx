// src/pages/Home/Home.tsx
import React from "react";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { Features } from "./sections/Features";
import { Testimonials } from "./sections/Testimonials";
import { FAQ } from "./sections/FAQ";

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
    </>
  );
};
