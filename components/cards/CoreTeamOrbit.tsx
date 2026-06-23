"use client";

import { noidaCore } from "@/data/team";

export default function CoreTeamOrbit() {
  const lead = noidaCore[0];
  const members = noidaCore.slice(1);

  return (
    <div className="mx-auto mt-12 max-w-5xl">
      <div className="rounded-[40px] border border-cyan-500/20 bg-[#081225]/40 p-6 md:p-10">

        <div className="flex flex-col items-center">

          {/* LEAD */}
          <div className="group flex flex-col items-center">
            <div className="overflow-hidden rounded-full border-4 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.25)]">
              <img
                src={lead.image}
                alt={lead.name}
                className="h-36 w-36 object-cover md:h-44 md:w-44"
              />
            </div>

            <h2 className="mt-5 text-3xl font-bold text-white">
              {lead.name}
            </h2>

            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-cyan-300">
              {lead.role}
            </p>
          </div>

          {/* CONNECTION LINE */}
          <div className="mt-4 h-8 w-px bg-cyan-500/20" />

          {/* MEMBERS */}
          <div className="grid w-full max-w-3xl grid-cols-2 gap-x-6 gap-y-8 md:gap-x-12 md:gap-y-10">

            {members.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col items-center text-center"
              >
                <div className="overflow-hidden rounded-full border border-cyan-500/20 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-36 w-36 object-cover md:h-40 md:w-40 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-cyan-300">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}