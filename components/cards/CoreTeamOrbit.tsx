"use client";

import { useState } from "react";
import { noidaCore } from "@/data/team";

export default function CoreTeamOrbit() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const lead = noidaCore[0];
  const members = noidaCore.slice(1);

  return (
    <div className="mx-auto mt-12 max-w-7xl">

      {/* LEAD SECTION */}
      <div className="overflow-hidden rounded-[32px] border border-cyan-500/20 bg-[#081225]/40">

        <div className="grid lg:grid-cols-[320px_1fr]">

          {/* IMAGE - 30% */}
          <div className="p-6">
            <div className="overflow-hidden rounded-[24px] border border-cyan-500/20">
              <img
                src={lead.image}
                alt={lead.name}
                className="h-[320px] w-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT - 70% */}
          <div className="flex flex-col justify-center p-8 md:p-10">

            <div className="inline-flex w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1">
              <span className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                Noida Lead
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-bold text-white">
              {lead.name}
            </h2>

            <p className="mt-2 text-lg text-cyan-300">
              {lead.role}
            </p>

            <p className="mt-6 max-w-3xl leading-relaxed text-zinc-400">
              {lead.bio}
            </p>
          </div>
        </div>
      </div>

      {/* MEMBERS */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {members.map((member) => (
          <div
            key={member.name}
            onClick={() =>
              setActiveCard(
                activeCard === member.name ? null : member.name
              )
            }
            className="group cursor-pointer [perspective:1000px]"
          >
            <div
              className={`relative h-[320px] rounded-[24px] transition-all duration-700 [transform-style:preserve-3d]
              ${activeCard === member.name
                  ? "[transform:rotateY(180deg)]"
                  : "md:group-hover:[transform:rotateY(180deg)]"
                }`}
            >
              {/* FRONT */}
              <div className="absolute inset-0 overflow-hidden rounded-[24px] border border-cyan-500/20 bg-[#081225]/40 [backface-visibility:hidden]">

                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-cyan-300">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 rounded-[24px] border border-cyan-500/30 bg-[#080510] p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">

                <div className="flex h-full flex-col">

                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    ROLE
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    {member.role}
                  </h3>

                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                      BIO
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                    <span className="text-xs uppercase tracking-wider text-green-400">
                      ACTIVE
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}