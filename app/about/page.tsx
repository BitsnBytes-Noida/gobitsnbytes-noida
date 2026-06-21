"use client";
import PageWrapper from "@/components/layout/PageWrapper";
import "../../styles/globals.css";
import { useState } from "react";
import { noidaCore, contributors, founders } from "@/data/team";
import TeamCard from "@/components/cards/TeamCard";
import ContributorAvatar from "@/components/cards/ContributorAvatar";

export default function About() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <PageWrapper>
      <main className="relative z-10 min-h-screen bg-linear-to-b from-[#020617]/80 via-[#0f172a]/70 to-[#020617]/80 px-6 py-16 text-[#e5e5e5] md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold uppercase md:text-7xl">
            BUILDERS.
            <br />
            <span className="bg-linear-to-r from-blue-400 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
              NOT MEMBERS.
            </span>
          </h1>

          <section className="mt-10 max-w-2xl">
            <p className="text-base leading-relaxed text-[#9a9a9a]">
              Bits&amp;Bytes Noida is a city fork of{" "}
              <a
                href="https://gobitsnbytes.org"
                className="text-[#e5e5e5] underline underline-offset-4 hover:text-white transition-colors"
              >
                Bits&amp;Bytes
              </a>
              . Teens who build and ship publicly. Same floor as the network.
              Everything else, we figure out for this city.
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#9a9a9a]">
              innovate. collaborate. hack.
            </p>
          </section>
          <section className="relative mt-20 border-t border-cyan-500/10 pt-14">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#9a9a9a]">
              NOIDA CORE
            </h2>

            {/* Lead */}
            <div className="mt-10 flex justify-center">
              <div className="w-full max-w-xs">
                <TeamCard
                  member={noidaCore[0]}
                  active={activeCard === noidaCore[0].name}
                  onClick={() =>
                    setActiveCard(
                      activeCard === noidaCore[0].name
                        ? null
                        : noidaCore[0].name,
                    )
                  }
                />
              </div>
            </div>

            {/* Core Team */}
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {noidaCore.slice(1).map((member) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  active={activeCard === member.name}
                  onClick={() =>
                    setActiveCard(
                      activeCard === member.name
                        ? null
                        : member.name,
                    )
                  }
                />
              ))}
            </div>
          </section>
          <section className="mt-20 border-t border-purple-500/10 pt-14">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#9a9a9a]">
              CONTRIBUTORS
            </h2>

            <p className="mt-3 text-sm text-[#666]">
              Builders helping shape and grow the Bits&Bytes Noida community.
            </p>

            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 justify-center gap-16">
              {contributors.map((member) => (
                <ContributorAvatar
                  key={member.name}
                  member={member}
                />
              ))}
            </div>
          </section>
          <section className="mt-20 border-t border-[#1a1a1a] pt-14">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#9a9a9a]">
              NETWORK FOUNDERS
            </h2>
            <p className="mt-3 text-sm text-[#666]">
              The founders of Bits&amp;Bytes. Originated from the parent org.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-8">
              {founders.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 rounded-xl border border-purple-500/10 bg-[#0c0815]/40 p-4 transition-all duration-300 hover:border-blue-500/30"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-20 w-20 rounded-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div>
                    <p className="text-sm font-medium tracking-tight">
                      {member.name}
                    </p>
                    <p className="text-xs uppercase tracking-wide text-[#9a9a9a]">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </PageWrapper>
  );
}
