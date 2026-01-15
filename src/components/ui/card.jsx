import { motion } from "framer-motion";

export function Card({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className={`bg-gradient-to-br from-bgGradientStart to-bgGradientEnd rounded-3xl shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-6 text-center space-y-4 ${className}`}>{children}</div>;
}
