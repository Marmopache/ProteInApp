// src/pages/Home/sections/Testimonials.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import { Card } from '../../../components/ui/Card';
import { type Testimonial, TESTIMONIALS } from '../../../data/homeContent';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-neutral-light dark:bg-neutral-dark">
      <SectionHeading
        title="Testimonios"
        subtitle="Lo que dicen nuestros usuarios después de probar ProteInMyFridge"
      />
      <motion.div
        className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {TESTIMONIALS.map((t: Testimonial, idx) => (
          <Card key={idx} className="flex flex-col items-center p-6 text-center">
            <img
              src={t.avatar}
              alt={`Avatar de ${t.name}`}
              className="w-20 h-20 rounded-full mb-4"
            />
            <h4 className="font-headings font-semibold text-primary mb-1">
              {t.name}
            </h4>
            <p className="text-sm text-neutral-gray dark:text-neutral mb-2">
              {t.role}
            </p>
            <p className="text-neutral-dark dark:text-neutral-light italic">
              “{t.quote}”
            </p>
          </Card>
        ))}
      </motion.div>
    </section>
  );
};
