// src/pages/Home/sections/HowItWorks.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import { type Step, HOW_IT_WORKS } from '../../../data/homeContent';
import { CheckCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-neutral-light dark:bg-neutral-dark">
      <SectionHeading
        title="¿Cómo funciona?"
        subtitle="Descubre el flujo sencillo que transforma tus alimentos en planes nutricionales."
      />
      <motion.div
        className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {HOW_IT_WORKS.map((step: Step) => (
          <div key={step.number} className="flex flex-col items-center text-center p-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4">
              {step.icon ?? <CheckCircle size={24} />}
            </div>
            <h3 className="font-headings font-semibold text-xl text-primary mb-2">
              {step.title}
            </h3>
            <p className="text-neutral-gray dark:text-neutral">
              {step.description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
