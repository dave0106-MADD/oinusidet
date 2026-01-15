"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur-md shadow-inner mt-16 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-textSecondary text-sm md:text-base">
        <p>© {new Date().getFullYear()} OinUsideT. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-primary transition-colors duration-300">About</Link>
          <Link href="/programs" className="hover:text-primary transition-colors duration-300">Programs</Link>
          <Link href="/contact" className="hover:text-primary transition-colors duration-300">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
