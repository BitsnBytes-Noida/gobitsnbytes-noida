"use client";


import Button from "@/components/common/Button";
import PageWrapper from "@/components/effects/PageWrapper";
import { builderTypes, joinSteps } from "@/data/join";

const FORM_URL = "https://forms.gle/SSAbJfczyuJLswPL8";
const DISCORD_URL = "https://discord.gg/u9Dkntjdy";

export default function Join() {
  return (
    <PageWrapper>
      <main
        className="relative z-10 min-h-screen bg-linear-to-b from-[#020617]/80
via-[#0f172a]/70
to-[#020617]/80 px-6 py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          {/* HERO */}
          <section className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              BITS&BYTES NOIDA
            </p>

            <h1 className="mt-6 text-5xl font-bold uppercase leading-[0.9] text-white md:text-7xl">
              BUILD
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                WITH US.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
              Not a club. Not a course.
              <br />A community of teenagers building projects, startups,
              communities, and ideas in public.
            </p>

            <Button href={FORM_URL} className="mt-8" external>
              APPLY NOW →
            </Button>
          </section>

          {/* WHO SHOULD APPLY */}
          <section className="mt-28">
            <h2 className="text-center text-sm uppercase tracking-[0.25em] text-cyan-300">
              WHO SHOULD APPLY
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {builderTypes.map((type) => (
                <div
                  key={type.title}
                  className="rounded-2xl border border-blue-500/20 bg-[#0c0815]/60 p-6 backdrop-blur"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {type.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-400">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-28">
            <h2 className="text-center text-sm uppercase tracking-[0.25em] text-cyan-300">
              NOT FOR YOU IF
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-red-500/20 bg-[#0c0815]/60 p-8">
                <h3 className="text-lg font-semibold text-red-300">
                  Probably Not
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-zinc-400">
                  <li>✕ You're only looking for certificates</li>
                  <li>✕ You want passive membership</li>
                  <li>✕ You just want a title on your profile</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-green-500/20 bg-[#0c0815]/60 p-8">
                <h3 className="text-lg font-semibold text-green-300">
                  You'll Fit In
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-zinc-400">
                  <li>✓ You like building things</li>
                  <li>✓ You enjoy learning in public</li>
                  <li>✓ You want to work with ambitious people</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section className="mt-28">
            <h2 className="text-center text-sm uppercase tracking-[0.25em] text-cyan-300">
              HOW IT WORKS
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {joinSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-blue-500/20 bg-[#0c0815]/60 p-8"
                >
                  <p className="text-4xl font-bold text-cyan-400">
                    {step.number}
                  </p>

                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-24">
            <div className="rounded-3xl border border-blue-500/20 bg-[#0c0815]/60 p-10 text-center">
              <h2 className="text-3xl font-bold text-white">
                MEET THE COMMUNITY FIRST.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                Join the Discord. Meet builders, explore projects, ask questions
                and see what we're building before you apply.
              </p>

              <Button href={DISCORD_URL} className="mt-8" external>
                JOIN DISCORD →
              </Button>
            </div>
          </section>
          {/* FINAL CTA */}
          <section className="mt-28 text-center">
            <div className="rounded-3xl border border-blue-500/20 bg-[#0c0815]/60 p-10 md:p-16">
              <h2 className="text-4xl font-bold uppercase text-white md:text-6xl">
                DON'T WAIT FOR
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  PERMISSION.
                </span>
                <br />
                BUILD SOMETHING.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
                If you're curious, ambitious and willing to build, you're
                already halfway in.
              </p>

              <Button href={FORM_URL} className="mt-8" external>
                APPLY NOW →
              </Button>
            </div>
          </section>
        </div>
      </main>
    </PageWrapper>
  );
}
