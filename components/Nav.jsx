"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav({ variant = "light" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textColor =
    variant === "light" ? "md:text-white text-black" : "text-black";
  const bgColor =
    variant === "light" ? "md:bg-transparent bg-white" : "bg-white";
  const iconColor = variant === "light" ? "white" : "black";
  const mobileIconColor = "black";

  return (
    <>
      <nav
        className={`flex justify-between items-center py-4 px-6 ${textColor} ${bgColor} relative z-40`}
      >
        <Link
          href="/"
          className="text-2xl md:text-4xl font-black tracking-wider"
        >
          MARCUS HALE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/about" className="hover:opacity-80 transition-opacity">
            About
          </Link>
          <Link href="/works" className="hover:opacity-80 transition-opacity">
            Works
          </Link>
          <Link
            href="/services"
            className="hover:opacity-80 transition-opacity"
          >
            Services
          </Link>
          <Link href="/contact" className="hover:opacity-80 transition-opacity">
            Contact
          </Link>
        </div>

        <a
          href="mailto:contact@example.com"
          className={`hidden md:block hover:opacity-80 transition-opacity ${textColor}`}
        >
          Let's Talk
        </a>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50"
          aria-label="Toggle menu"
        >
          <svg
            width="80"
            height="40"
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="5"
              x2="80"
              y2="5"
              stroke={mobileIconColor}
              strokeWidth="6"
              strokeLinecap="round"
              className={`transition-all md:hidden ${
                isMenuOpen ? "rotate-45 translate-x-4 translate-y-15" : ""
              }`}
            />
            <line
              x1="0"
              y1="20"
              x2="80"
              y2="20"
              stroke={mobileIconColor}
              strokeWidth="6"
              strokeLinecap="round"
              className={`transition-all md:hidden ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <line
              x1="0"
              y1="35"
              x2="80"
              y2="35"
              stroke={mobileIconColor}
              strokeWidth="6"
              strokeLinecap="round"
              className={`transition-all md:hidden ${
                isMenuOpen ? "-rotate-45 translate-x-4 -translate-y-15" : ""
              }`}
            />
            <line
              x1="0"
              y1="5"
              x2="80"
              y2="5"
              stroke={iconColor}
              strokeWidth="6"
              strokeLinecap="round"
              className={`transition-all hidden md:block ${
                isMenuOpen ? "rotate-45 translate-x-4 translate-y-15" : ""
              }`}
            />
            <line
              x1="0"
              y1="20"
              x2="80"
              y2="20"
              stroke={iconColor}
              strokeWidth="6"
              strokeLinecap="round"
              className={`transition-all hidden md:block ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <line
              x1="0"
              y1="35"
              x2="80"
              y2="35"
              stroke={iconColor}
              strokeWidth="6"
              strokeLinecap="round"
              className={`transition-all hidden md:block ${
                isMenuOpen ? "-rotate-45 translate-x-4 -translate-y-15" : ""
              }`}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col pt-6 px-6">
          <nav className="flex justify-between items-center mb-12">
            <Link
              href="/"
              className="text-3xl font-black tracking-wider text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              MARCUS HALE
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="z-50"
              aria-label="Close menu"
            >
              <svg
                width="80"
                height="40"
                viewBox="0 0 80 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="10"
                  y1="5"
                  x2="70"
                  y2="35"
                  stroke="black"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <line
                  x1="10"
                  y1="35"
                  x2="70"
                  y2="5"
                  stroke="black"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </nav>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl md:text-6xl font-normal mb-6 hover:opacity-70 transition-opacity text-black"
          >
            About
          </Link>
          <Link
            href="/works"
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl md:text-6xl font-normal mb-6 hover:opacity-70 transition-opacity text-black"
          >
            Works
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl md:text-6xl font-normal mb-6 hover:opacity-70 transition-opacity text-black"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl md:text-6xl font-normal mb-12 hover:opacity-70 transition-opacity text-black"
          >
            Contact
          </Link>
          <Link
            href="mailto:contact@example.com"
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl md:text-6xl font-normal hover:opacity-70 transition-opacity text-black"
          >
            Let's Talk
          </Link>
        </div>
      )}
    </>
  );
}
