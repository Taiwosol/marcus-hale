"use client";

import { useState } from "react";
import Link from "next/link";

function AnimatedLink({ href, children, className = "", onClick, ...props }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative overflow-hidden ${className}`}
      {...props}
    >
      <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute top-full left-0 inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
    </Link>
  );
}

function AnimatedAnchor({ href, children, className = "", onClick, ...props }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative overflow-hidden ${className}`}
      {...props}
    >
      <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute top-full left-0 inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {children}
      </span>
    </a>
  );
}

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
          className="text-xl md:text-4xl font-black tracking-wider"
        >
          MARCUS HALE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <AnimatedLink href="/about">About</AnimatedLink>
          <AnimatedLink href="/works">Works</AnimatedLink>
          <AnimatedLink href="/services">Services</AnimatedLink>
          <AnimatedLink href="/contact">Contact</AnimatedLink>
        </div>

        <AnimatedAnchor
          href="mailto:contact@example.com"
          className={`hidden md:block ${textColor}`}
        >
          Let's Talk
        </AnimatedAnchor>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50"
          aria-label="Toggle menu"
        >
          <svg
            width="60"
            height="30"
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:hidden"
          >
            <line
              x1="0"
              y1="5"
              x2="80"
              y2="5"
              stroke={mobileIconColor}
              strokeWidth="6"
              strokeLinecap="round"
              className={`transition-all ${
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
              className={`transition-all ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <line
              x1="0"
              y1="35"
              x2="80"
              y2="35"
              stroke={mobileIconColor}
              strokeWidth="6"
              strokeLinecap="round"
              className={`transition-all ${
                isMenuOpen ? "-rotate-45 translate-x-4 -translate-y-15" : ""
              }`}
            />
          </svg>
          <svg
            width="80"
            height="40"
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:block"
          >
            <line
              x1="0"
              y1="5"
              x2="80"
              y2="5"
              stroke={iconColor}
              strokeWidth="6"
              strokeLinecap="round"
              className={`transition-all ${
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
              className={`transition-all ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <line
              x1="0"
              y1="35"
              x2="80"
              y2="35"
              stroke={iconColor}
              strokeWidth="6"
              strokeLinecap="round"
              className={`transition-all ${
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
              className="text-xl font-black tracking-wider text-black"
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
                width="60"
                height="30"
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
          <AnimatedLink
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl md:text-6xl font-normal mb-6 text-black"
          >
            About
          </AnimatedLink>
          <AnimatedLink
            href="/works"
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl md:text-6xl font-normal mb-6 text-black"
          >
            Works
          </AnimatedLink>
          <AnimatedLink
            href="/services"
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl md:text-6xl font-normal mb-6 text-black"
          >
            Services
          </AnimatedLink>
          <AnimatedLink
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl md:text-6xl font-normal mb-12 text-black"
          >
            Contact
          </AnimatedLink>
          <AnimatedAnchor
            href="mailto:contact@example.com"
            onClick={() => setIsMenuOpen(false)}
            className="text-5xl md:text-6xl font-normal text-black"
          >
            Let's Talk
          </AnimatedAnchor>
        </div>
      )}
    </>
  );
}
