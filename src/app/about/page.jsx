"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "../../components/ui/AnimatedBackground";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen px-6 md:px-12 py-20 overflow-hidden bg-[url('/images/bg-fruits.png')] bg-cover bg-center bg-opacity-5">

      <AnimatedBackground />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-display font-extrabold text-primary drop-shadow-lg mb-6"
      >
        About OinUsideT
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-textSecondary text-lg md:text-xl max-w-3xl leading-relaxed"
      >
        OinUsideT is a health and wellness brand dedicated to helping individuals discover optimal health from the inside out. Our mission is to empower you with knowledge about nutrition, fitness, mental well-being, and holistic self-care. Every program, guide, and resource we offer is designed to support your journey of self-discovery and empowerment.
      </motion.p>
    </div>
  );
}
