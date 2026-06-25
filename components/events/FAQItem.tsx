"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({
  question,
  answer,
}: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        overflow-hidden
        rounded-2xl
        border
        bg-[#081225]/40
        transition-all
        duration-300
        ${
          open
            ? "border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.12)]"
            : "border-cyan-500/20"
        }
      `}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-lg font-semibold text-white">
          {question}
        </span>

        <ChevronDown
          className={`h-5 w-5 text-cyan-300 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-zinc-400">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}