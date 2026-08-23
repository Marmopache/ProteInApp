// src/components/ui/Card.tsx
import React from 'react';
import { motion } from 'framer-motion';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...rest }) => {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
      className={`bg-white dark:bg-neutral-dark rounded-3xl p-6 shadow-sm transition-shadow ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
