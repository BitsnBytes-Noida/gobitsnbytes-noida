"use client";

import { useEffect, useState } from "react";
import { terminalSets } from "@/data/home";

export default function HomeTerminal() {
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
          setCurrentSet(
            (prev) => (prev + 1) % terminalSets.length,
          );
        }
      }, 15);
    };

    typeText();

    return () => {
      clearInterval(typingInterval);
      clearInterval(deletingInterval);
    };
  }, [currentSet]);

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-blue-500/20 bg-black/60 backdrop-blur lg:max-w-lg">
      <div className="flex items-center gap-2 border-b border-blue-500/20 px-4 py-3">
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
                  ? "text-cyan-300"
                  : "text-zinc-400"
            }
          >
            {line}
          </div>
        ))}

        <span className="animate-pulse text-white">▋</span>
      </div>
    </div>
  );
}