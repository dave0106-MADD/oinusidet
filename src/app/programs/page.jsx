"use client";

import Header from "../../components/ui/Header";
import AnimatedBackground from "../../components/ui/AnimatedBackground";
import { motion } from "framer-motion";

export default function ProgramsPage() {
  const programs = [
    { title: "Community", description: "Join a supportive health-focused community." },
    { title: "Nutrition", description: "Learn how to fuel your body optimally." },
    { title: "Fitness", description: "Guidance for exercise and strength routines." },
    { title: "Mindfulness", description: "Mental health and meditation practices." },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Header */}
      <Header />

      {/* Programs Section */}
      <section className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Our Programs
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white/5 p-6 rounded-2xl backdrop-blur hover:scale-105 transition-transform cursor-pointer"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-2">{program.title}</h2>
              <p className="text-white/80">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 px-6 py-16 text-center">
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="px-8 py-4 bg-primary text-black rounded-full font-semibold hover:bg-primary/90 transition"
        >
          Begin Your Journey
        </motion.a>
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
