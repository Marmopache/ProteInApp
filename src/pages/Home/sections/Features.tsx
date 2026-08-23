// src/pages/Home/sections/Features.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import { Card } from '../../../components/ui/Card';
import { type Feature, FEATURES } from '../../../data/homeContent';
import { CheckCircle } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-neutral-dark">
      <SectionHeading
        title="Características destacadas"
        subtitle="Todo lo que ProteInMyFridge hace por ti, sin complicaciones."
      />
      <motion.div
        className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {FEATURES.map((feature: Feature, idx) => (
          <Card key={idx} className="flex flex-col items-center text-center p-6">
            <div className="mb-4 text-primary">
              {feature.icon ?? <CheckCircle size={32} />}
            </div>
            <h3 className="font-headings font-semibold text-lg text-primary mb-2">
              {feature.title}
            </h3>
            <p className="text-neutral-gray dark:text-neutral">
              {feature.description}
            </p>
          </Card>
        ))}
      </motion.div>
    </section>
  );
};
