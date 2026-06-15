"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/globals.css";

export default function Home() {
  const terminalSets = [
    [
      "bits@noida:~$ create project",
      "> initializing...",
      "> building components...",
      "> running tests...",
      "✓ deployed",
    ],
    [
      "builder@noida:~$ find builders",
      "> scanning network...",
      "> matching interests...",
      "> 12 builders found",
      "✓ connected",
    ],
    [
      "bits@noida:~$ join community",
      "> creating profile...",
      "> syncing city fork...",
      "> granting access...",
      "✓ welcome aboard",
    ],
    [
      "aryan@noida:~$ start hackathon",
      "> inviting members...",
      "> creating teams...",
      "> generating channels...",
      "✓ event live",
    ],
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let deletingInterval: NodeJS.Timeout;

    const text = terminalSets[currentSet].join("\n");

    const typeText = () => {
      let i = 0;

      typingInterval = setInterval(() => {
        if (i <= text.length) {
          setDisplayedText(text.slice(0, i));
          i++;
        } else {
          clearInterval(typingInterval);

          setTimeout(() => {
            deleteText(text);
          }, 1800);
        }
      }, 35);
    };

    const deleteText = (text: string) => {
      let i = text.length;

      deletingInterval = setInterval(() => {
        if (i >= 0) {
          setDisplayedText(text.slice(0, i));
          i--;
        } else {
          clearInterval(deletingInterval);
          setCurrentSet((prev) => (prev + 1) % terminalSets.length);
        }
      }, 15);
    };

    typeText();

    return () => {
      clearInterval(typingInterval);
      clearInterval(deletingInterval);
    };
  }, [currentSet]);

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
    <main className="bg-linear-to-b from-[#06000f]/70 via-[#0d0518]/70 to-[#040007]/70 relative overflow-hidden px-5 py-16 sm:px-6 md:py-24 lg:py-32">
      <div className="particles absolute inset-0 pointer-events-none">
        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>
        <span className="particle particle-4 hidden md:block"></span>
        <span className="particle particle-5 hidden md:block"></span>
      </div>

      <div className="hero-glow absolute left-1/2 top-32 -z-10 h-70 w-70 -translate-x-1/2 rounded-full bg-purple-700/20 blur-[120px] md:top-40 md:h-125 md:w-125 md:blur-[150px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Left Side */}
        <div className="order-0 text-center lg:text-left">
          <p className="text-xs uppercase tracking-[0.25em] text-purple-300">
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
            <span className="bg-linear-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
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
            <a
              href="/join"
              className="group inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-lg border border-purple-500/40 bg-purple-500/10 px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-all duration-200 hover:scale-105 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] active:scale-95 active:bg-purple-500/20 active:border-purple-300"
            >
              JOIN NOIDA
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/about"
              className="w-full sm:w-auto rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium uppercase tracking-wide text-zinc-300 transition-all duration-200 hover:border-purple-500 hover:text-white active:scale-95 active:border-purple-400 active:text-white"
            >
              LEARN MORE
            </a>
          </motion.div>
        </div>

        {/* Right Side Terminal */}
        <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    delay: 0.4,
    duration: 0.8,
  }}
  className="order-1 lg:order-2"
>
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-purple-500/20 bg-black/60 backdrop-blur lg:max-w-lg">
            <div className="flex items-center gap-2 border-b border-purple-500/20 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <div className="h-35 p-4 font-mono text-xs sm:h-45 sm:p-6 sm:text-sm">
              {displayedText.split("\n").map((line, i) => (
                <div
                  key={i}
                  className={
                    line.includes("✓")
                      ? "text-green-400"
                      : line.includes("$")
                        ? "text-purple-300"
                        : "text-zinc-400"
                  }
                >
                  {line}
                </div>
              ))}

              <span className="animate-pulse text-white">▋</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
