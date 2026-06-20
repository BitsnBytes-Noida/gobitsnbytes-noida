"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/globals.css";
import Button from "@/components/ui/Button";
import HomeTerminal from "@/components/sections/TerminalDemo";
export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="bg-linear-to-b from-[#020617]/80
via-[#0f172a]/70
to-[#020617]/80 relative overflow-hidden px-5 py-16 sm:px-6 md:py-24 lg:py-32">
      <div className="particles absolute inset-0 pointer-events-none">
        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>
        <span className="particle particle-4 hidden md:block"></span>
        <span className="particle particle-5 hidden md:block"></span>
      </div>

      <div className="hero-glow absolute left-1/2 top-32 -z-10 h-70 w-70 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px] md:top-40 md:h-125 md:w-125 md:blur-[150px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left Side */}
        <div className="order-0 text-center lg:text-left">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
            BITS&BYTES NOIDA
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-4xl font-bold uppercase leading-[0.9] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Build.
            <br />
            <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Ship.
            </span>
            <br />
            Repeat.
          </motion.h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-zinc-400 sm:text-lg lg:mx-0">
            A city of teenage builders creating projects, startups, communities
            and ideas in public.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/join">JOIN NOIDA →</Button>

            <Button href="/about" variant="secondary">
              LEARN MORE →
            </Button>
          </motion.div>
        </div>

        {/* Right Side Terminal */}
        <HomeTerminal />
      </div>
    </main>
  );
}
