"use client";
import PageWrapper from "@/components/PageWrapper";
import CountUp from "@/components/CountUp";
import "../../styles/globals.css";
import { useState } from "react";

export default function About() {
  const noidaCore = [
    {
      name: "Aryan Chauhan",
      role: "Lead",
      image: "/team/aryan.png",
      bio: "Building the backbone of Bits&Bytes Noida.",
    },
    {
      name: "Tanish Garg",
      role: "Tech Lead",
      image: "/team/tanish.jpg",
      bio: "Leading the development of our digital platforms.",
    },
    {
      name: "Nisha Rawat",
      role: "Operations Head",
      image: "/team/nisha.png",
      bio: "Ensuring events and operations run smoothly.",
    },
    {
      name: "Disha Yadav",
      role: "Creative & Design Head",
      image: "/team/disha.png",
      bio: "Crafting the visual identity of the community.",
    },
    {
      name: "Benny Vijay Daniel",
      role: "Sponsorship Head",
      image: "/team/benny.png",
      bio: "Building partnerships and sponsorships.",
    },
  ];
  const contributors = [
    {
      name: "Rashita Yadav",
      role: "Contributor",
      image: "/team/rashita.jpg",
      bio: "Actively contributing to projects and community growth.",
    },
    {
      name: "Nikita Yadav",
      role: "Contributor",
      image: "/team/nikita.jpg",
      bio: "Supporting community initiatives and builder programs.",
    },
    {
      name: "Prasiddhi Sai",
      role: "Contributor",
      image: "/team/prasiddhi.jpg",
      bio: "Helping create opportunities and experiences for builders.",
    },
    {
      name: "Shubham Kaushik",
      role: "Contributor",
      image: "/team/shubham.jpg",
      bio: "Contributing to the growth and development of Bits&Bytes Noida.",
    },
  ];
  const founders = [
    {
      name: "Yash Singh",
      role: "Co-Founder & Organisation Lead",
      image: "/team/yash.jpeg",
    },
    {
      name: "Aadrika Maurya",
      role: "Co-Founder & Chief Creative Strategist",
      image: "/team/aadrika.png",
    },
    {
      name: "Akshat Kushwaha",
      role: "Co-Founder & Technical Lead",
      image: "/team/akshat.jpg",
    },
  ];
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <PageWrapper>
      <main className="relative z-10 min-h-screen bg-linear-to-b from-[#06000f]/70 via-[#0d0518]/70 to-[#040007]/70 px-6 py-16 text-[#e5e5e5] md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold uppercase md:text-7xl">
            BUILDERS.
            <br />
            <span className="bg-linear-to-r from-purple-400 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
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
          {/* STATS */}
          {/* <section className="mt-16">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div>
                <h3 className="text-4xl font-bold text-purple-400"><CountUp end={30} />+</h3>
                <p className="text-sm text-zinc-400">Builders</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-purple-400"><CountUp end={10} />+</h3>
                <p className="text-sm text-zinc-400">Projects</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-purple-400"><CountUp end={1} /></h3>
                <p className="text-sm text-zinc-400">City</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-purple-400"><CountUp end={999} />+</h3>
                <p className="text-sm text-zinc-400">Ideas</p>
              </div>
            </div>
          </section> */}
          <section className="relative mt-14">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#9a9a9a]">
              NOIDA CORE
            </h2>
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-700/20 blur-3xl" />
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {noidaCore.map((member) => (
                <div
                  key={member.name}
                  onClick={() =>
                    setActiveCard(
                      activeCard === member.name ? null : member.name,
                    )
                  }
                  className="group w-full cursor-pointer [perspective:1000px]"
                >
                  <div
                    className={`relative h-[340px] sm:h-[360px] w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] ${
                      activeCard === member.name
                        ? "[transform:rotateY(180deg)]"
                        : "md:group-hover:[transform:rotateY(180deg)]"
                    }`}
                  >
                    {/* FRONT */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl border border-purple-500/20 bg-[#0c0815] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-white">
                          {member.name}
                        </h3>

                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-purple-300">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 rounded-2xl border border-purple-500/30 bg-[#080510] p-6 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="flex h-full flex-col">
                        <div>
                          <p className="font-mono text-xs text-purple-400">
                            ROLE
                          </p>

                          <h3 className="mt-2 text-lg font-semibold text-white">
                            {member.role}
                          </h3>
                        </div>

                        <div className="mt-6">
                          <p className="font-mono text-xs text-purple-400">
                            MISSION
                          </p>

                          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                            {member.bio}
                          </p>
                        </div>

                        <div className="mt-auto flex items-center gap-2">
                          <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                          <span className="font-mono text-xs text-green-400">
                            ONLINE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {contributors.map((member) => (
                <div
                  key={member.name}
                  onClick={() =>
                    setActiveCard(
                      activeCard === member.name ? null : member.name,
                    )
                  }
                  className="group w-full cursor-pointer [perspective:1000px]"
                >
                  <div
                    className={`relative h-[340px] sm:h-[360px] w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] ${
                      activeCard === member.name
                        ? "[transform:rotateY(180deg)]"
                        : "md:group-hover:[transform:rotateY(180deg)]"
                    }`}
                  >
                    {/* FRONT */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl border border-purple-500/20 bg-[#0c0815] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-white">
                          {member.name}
                        </h3>

                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-purple-300">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 rounded-2xl border border-purple-500/30 bg-[#080510] p-6 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="flex h-full flex-col">
                        <div>
                          <p className="font-mono text-xs text-purple-400">
                            ROLE
                          </p>

                          <h3 className="mt-2 text-lg font-semibold text-white">
                            {member.role}
                          </h3>
                        </div>

                        <div className="mt-6">
                          <p className="font-mono text-xs text-purple-400">
                            MISSION
                          </p>

                          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                            {member.bio}
                          </p>
                        </div>

                        <div className="mt-auto flex items-center gap-2">
                          <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                          <span className="font-mono text-xs text-green-400">
                            ONLINE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  className="flex items-center gap-4 rounded-xl border border-purple-500/10 bg-[#0c0815]/40 p-4 transition-all duration-300 hover:border-purple-500/30"
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
