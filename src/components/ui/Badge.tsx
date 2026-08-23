// src/components/ui/Badge.tsx
import React from 'react';
import { motion } from 'framer-motion';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '', ...rest }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium ${className}`}
      {...rest}
    >
      {children}
    </motion.span>
  );
};
