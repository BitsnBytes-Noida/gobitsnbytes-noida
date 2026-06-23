"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "INITIALIZING NODE...",
  "LOADING BUILDERS...",
  "CONNECTING TO NETWORK...",
  "ACCESS GRANTED",
];

export default function OpeningLoader() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) =>
        prev < messages.length - 1 ? prev + 1 : prev,
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#020617]">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative flex h-full flex-col items-center justify-center">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl font-bold tracking-tight text-white md:text-7xl"
        >
          BITS&BYTES
          <br />
          <span className="text-cyan-400">NOIDA</span>
        </motion.h1>

        {/* Status */}
        <motion.p
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 font-mono text-sm uppercase tracking-[0.3em] text-cyan-400"
        >
          {messages[messageIndex]}
          <span className="animate-pulse">_</span>
        </motion.p>

        {/* Progress Bar */}
        <div className="mt-6 h-1.5 w-72 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="h-full rounded-full bg-cyan-400"
          />
        </div>

        {/* Loading Percentage */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 font-mono text-xs text-zinc-500"
        >
          BUILDING THE NOIDA NODE
        </motion.p>
      </div>

      {/* Bottom Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.35em] text-zinc-500"
      >
        BUILDERS • NOT MEMBERS
      </motion.p>
    </div>
  );
}