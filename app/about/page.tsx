"use client";

import "../../styles/globals.css";
import { contributors, founders } from "@/data/team";
import PageWrapper from "@/components/effects/PageWrapper";
import ContributorAvatar from "@/components/team/ContributorAvatar";
import CoreTeamOrbit from "@/components/team/CoreTeamOrbit";


export default function About() {
  return (
    <PageWrapper>
      <main className="relative z-10 min-h-screen bg-linear-to-b from-[#020617]/80 via-[#0f172a]/70 to-[#020617]/80 px-6 py-16 text-[#e5e5e5] md:py-20">
        <div className="mx-auto max-w-6xl">
            <h1 className="display-title text-5xl font-bold uppercase md:text-7xl">
            BUILDERS.
            <br />
              <span className="accent-text">
              NOT MEMBERS.
            </span>
          </h1>

          <section className="mt-10 max-w-2xl">
            <p className="text-base leading-relaxed text-[#9a9a9a]">
              Bits&amp;Bytes Noida is the Noida operational unit of the{" "}
              <a
                href="https://gobitsnbytes.org"
                className="text-[#e5e5e5] underline underline-offset-4 hover:text-white transition-colors"
              >
                bits&amp;bytes™ network
              </a>
              . It is teen-led, builds and ships publicly, and adapts the
              network's operating principles for Noida. The parent network
              remains the source for shared standards and governance.
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#9a9a9a]">
              innovate. collaborate. hack.
            </p>
          </section>
          <section className="mt-20 border-t border-cyan-500/10 pt-14">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#9a9a9a]">
              NOIDA CORE
            </h2>

            <CoreTeamOrbit />
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
          <section
            aria-labelledby="network-founders-heading"
            className="mt-20 border-t border-[#1a1a1a] pt-14"
          >
            <h2
              id="network-founders-heading"
              className="text-xs font-medium uppercase tracking-[0.18em] text-[#9a9a9a]"
            >
              NETWORK FOUNDERS
            </h2>
            <p className="mt-3 text-sm text-[#666]">
              The founders of Bits&amp;Bytes. Originated from the parent org.
            </p>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {founders.map((member) => (
                <li
                  key={member.name}
                  className="founder-card flex items-center gap-4 rounded-xl border border-purple-500/10 bg-[#0c0815]/40 p-4"
                >
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    loading="lazy"
                    decoding="async"
                    className="h-20 w-20 shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-medium tracking-tight text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#9a9a9a]">
                      {member.role}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </PageWrapper>
  );
}
