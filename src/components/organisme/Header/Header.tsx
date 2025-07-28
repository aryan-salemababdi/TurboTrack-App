"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { items } from "./data";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-1">
          <span className="animate-pulse text-[#A3E635]">🚀</span>
          Turbo<span className="text-[#A3E635]">Track</span>
          <span className="hidden md:inline text-sm font-bold text-gray-400 ml-2">
            Engine
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-300 font-bold">
          {["Home", "Features", "Pricing", "Contact"].map((item) => (
            <Link
              key={item}
              href="#"
              className="hover:text-[#A3E635] transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4 text-gray-300 font-bold">
              {items.map((item) => (
                <Link
                  key={item.id}
                  href="#"
                  onClick={closeMenu}
                  className="hover:text-[#A3E635] transition"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
