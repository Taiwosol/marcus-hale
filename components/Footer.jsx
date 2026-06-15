"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 max-w-2xl">
            let's work together to bring your ideas to life.
          </h2>
          <Link
            href="/contact"
            className="inline-block border-2 border-white px-8 py-4 text-lg hover:bg-white hover:text-black transition-all"
          >
            Reach Out to Us
          </Link>
        </div>

        {/* Links Section - Desktop */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 mb-16">
          <div>
            <p className="text-sm opacity-70">MARCUS HALE</p>
          </div>
          <div>
            <p className="text-sm opacity-70">
              123 Innovation Way, Suite 456, Tech City, CA 90210
            </p>
            <p className="text-sm font-bold mt-1">
              {mounted ? formatTime(time) : "--:--:--"}
            </p>
          </div>
          <div className="space-y-2">
            <Link
              href="/"
              className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              About
            </Link>
            <Link
              href="/works"
              className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Works
            </Link>
            <Link
              href="/services"
              className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Contact
            </Link>
          </div>
          <div className="space-y-2">
            <a
              href="#"
              className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="#"
              className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Twitter(x)
            </a>
          </div>
        </div>

        {/* Links Section - Mobile */}
        <div className="md:hidden space-y-8 mb-16">
          <div>
            <p className="text-2xl mb-6">MARCUS HALE</p>
            <p className="text-xl opacity-90">
              123 Innovation Way, Suite 456, Tech City, CA 90210
            </p>
            <p className="text-xl font-bold mt-2">
              {mounted ? formatTime(time) : "--:--:--"}
            </p>
          </div>
          <div className="space-y-3">
            <Link
              href="/"
              className="block text-2xl opacity-90 hover:opacity-100 transition-opacity"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-2xl opacity-90 hover:opacity-100 transition-opacity"
            >
              About
            </Link>
            <Link
              href="/works"
              className="block text-2xl opacity-90 hover:opacity-100 transition-opacity"
            >
              Works
            </Link>
            <Link
              href="/services"
              className="block text-2xl opacity-90 hover:opacity-100 transition-opacity"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-2xl opacity-90 hover:opacity-100 transition-opacity"
            >
              Contact
            </Link>
          </div>
          <div className="space-y-3">
            <a
              href="#"
              className="block text-2xl opacity-90 hover:opacity-100 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="#"
              className="block text-2xl opacity-90 hover:opacity-100 transition-opacity"
            >
              Twitter(x)
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-[8vw] md:text-[8vw] lg:text-[10vw] font-black tracking-tighter">
          MARCUS HALE©
        </div>
      </div>
    </footer>
  );
}
