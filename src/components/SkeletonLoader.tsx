import { motion } from "framer-motion";

interface SkeletonLoaderProps {
  className?: string;
  variant?: "text" | "card" | "circle" | "button";
}

const SkeletonLoader = ({ className = "", variant = "text" }: SkeletonLoaderProps) => {
  const baseClasses = "skeleton-shimmer rounded-lg";
  
  const variants = {
    text: "h-4 w-full",
    card: "h-48 w-full",
    circle: "h-12 w-12 rounded-full",
    button: "h-12 w-32",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    />
  );
};

export default SkeletonLoader;
