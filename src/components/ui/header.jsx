"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur sticky top-0 z-20">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="OinUsideT Logo" width={120} height={40} />
        <span className="text-white font-bold text-lg">OinUsideT</span>
      </div>

      <nav className="flex gap-6">
        <Link href="/" className="text-white hover:text-primary transition">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-primary transition">
          About
        </Link>
        <Link href="/programs" className="text-white hover:text-primary transition">
          Programs
        </Link>
        <Link href="/contact" className="text-white hover:text-primary transition">
          Contact
        </Link>
      </nav>
    </header>
  );
}
