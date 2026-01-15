"use client";

import Header from "../components/ui/Header";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          What’s in your body?!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl"
        >
          Empower yourself with health, fitness, nutrition, mental well-being, and self-discovery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex gap-6 flex-wrap justify-center"
        >
          <a
            href="/programs"
            className="px-6 py-3 bg-primary text-black rounded-full font-semibold hover:bg-primary/90 transition"
          >
            Begin Your Journey
          </a>
          <a
            href="/about"
            className="px-6 py-3 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition"
          >
            Explore Our Approach
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/90 backdrop-blur py-8 mt-24 text-center text-white/70">
        <p className="mb-2">© 2026 OinUsideT. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a href="/about" className="hover:text-primary transition">
            About
          </a>
          <a href="/programs" className="hover:text-primary transition">
            Programs
          </a>
          <a href="/contact" className="hover:text-primary transition">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
