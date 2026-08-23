// src/components/ui/Button.tsx
import React from 'react';
import { motion } from 'framer-motion';

type MotionTag = keyof typeof motion;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Render the button as a different element or component (e.g., 'a'). Defaults to 'button'. */
  as?: MotionTag;
  /** Visual variant of the button. */
  variant?: 'primary' | 'secondary';
  /** Content of the button. */
  children: React.ReactNode;
  /** Additional class names. */
  className?: string;
  /** Optional href when rendering as an anchor. */
  href?: string;
}

/**
 * Polymorphic button component with Framer Motion animations.
 * Supports rendering as <button>, <a>, or any custom component via the `as` prop.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  as = 'button',
  className = '',
  children,
  ...rest
}) => {
  
  // Resolve the appropriate motion component.
  const MotionComponent = (motion as any)[as] || motion.button;

  const variantClasses: Record<string, string> = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-accent text-white hover:bg-accent/90',
  };

  return (
    <MotionComponent
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-3 rounded-2xl font-medium transition-colors ${variantClasses[variant] ?? ''} ${className}`}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};
