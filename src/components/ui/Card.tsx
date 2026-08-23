import { motion, type HTMLMotionProps } from "framer-motion";

export interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({
  children,
  className = "",
  ...rest
}: CardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      }}
      className={`bg-white dark:bg-neutral-dark rounded-3xl p-6 shadow-sm transition-shadow ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};