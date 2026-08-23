import { motion, type HTMLMotionProps } from "framer-motion";

export interface BadgeProps extends HTMLMotionProps<"span"> {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({
  children,
  className = "",
  ...rest
}: BadgeProps) => {
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