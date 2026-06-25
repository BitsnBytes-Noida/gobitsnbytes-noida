"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { primaryNavLinks } from "@/data/navigation";
import Button from "../common/Button";


export default function Navbar() {
  
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <nav
  className={`fixed top-0 left-0 right-0 z-60 transition-all duration-300 ${
    scrolled
      ? "border-b border-blue-500/20 bg-black/50 backdrop-blur-xl"
      : "bg-transparent"
  }`}
>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src="/logo.svg"
            alt="Bits&Bytes Noida"
            className="h-8 w-8 rounded-full"
          />

          <span className="text-sm font-semibold tracking-wide text-white">
            BITS&BYTES NOIDA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {primaryNavLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                pathname === item.href
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}

              <span
                className={`absolute -bottom-2 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                  pathname === item.href ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}

          <Button
          href="/join"
          size="sm"
          >
            JOIN →
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-70 text-2xl text-white transition-all active:scale-90"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </motion.button>

          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
                />

                {/* Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 top-16 z-50 w-64 rounded-2xl border border-blue-500/20 bg-black/90 p-6 backdrop-blur-xl"
                >
                  <div className="flex flex-col gap-5">
                    {primaryNavLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-sm font-medium transition ${
                          pathname === item.href
                            ? "text-white"
                            : "text-zinc-400 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="/join"
                      onClick={() => setMobileMenuOpen(false)}
                      className="mt-2 flex justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-sm font-medium text-white transition-all duration-300 active:scale-95"
                    >
                      JOIN NOIDA →
                    </Link>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
