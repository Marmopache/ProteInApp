// src/components/ui/SectionHeading.tsx
import React from 'react';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl font-bold text-neutral-dark dark:text-neutral-light mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-gray dark:text-neutral-gray">
          {subtitle}
        </p>
      )}
    </div>
  );
};
