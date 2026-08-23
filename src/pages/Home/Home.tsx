// src/pages/Home/Home.tsx
import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Hero } from './sections/Hero';
import { HowItWorks } from './sections/HowItWorks';
import { Features } from './sections/Features';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';

export const Home: React.FC = () => {
  return (
    <div className="relative font-body text-neutral-dark dark:text-neutral-light bg-neutral-light dark:bg-neutral-dark min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};
