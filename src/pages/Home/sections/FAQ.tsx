// src/pages/Home/sections/FAQ.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import { type FAQItem, FAQ_ITEMS } from '../../../data/homeContent';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-neutral-dark">
      <SectionHeading
        title="Preguntas frecuentes"
        subtitle="Todo lo que necesitas saber antes de comenzar."
      />
      <motion.div
        className="max-w-3xl mx-auto space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {FAQ_ITEMS.map((item: FAQItem, idx) => (
          <div key={idx} className="border-b border-neutral-gray/20 dark:border-neutral/30 pb-2">
            <button
              className="w-full flex justify-between items-center py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="font-headings font-medium text-neutral-dark dark:text-neutral-light">
                {item.question}
              </span>
              {openIndex === idx ? (
                <ChevronUp className="text-primary" size={20} />
              ) : (
                <ChevronDown className="text-primary" size={20} />
              )}
            </button>
            {openIndex === idx && (
              <div className="pl-4 pr-2 text-neutral-gray dark:text-neutral mb-2">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};
