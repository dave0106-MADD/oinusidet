"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    // generate shapes only on client after hydration
    const generatedShapes = Array.from({ length: 10 }).map(() => ({
      size: Math.random() * 200 + 50,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.2 + 0.05,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
    }));
    setShapes(generatedShapes);
  }, []);

  if (shapes.length === 0) return null; // nothing rendered on server

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-primary to-secondary"
          style={{
            width: shape.size,
            height: shape.size,
            top: `${shape.top}%`,
            left: `${shape.left}%`,
            opacity: shape.opacity,
            filter: "blur(60px)",
          }}
          animate={{
            y: ["0%", "20%", "0%"],
            x: ["0%", "10%", "0%"],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: "mirror",
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
