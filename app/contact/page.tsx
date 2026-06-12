"use client";

import PageWrapper from "@/components/PageWrapper";

const EMAIL = "noida@gobitsnbytes.org";
const DISCORD = "YOUR_DISCORD_INVITE_LINK";
const INSTAGRAM = "https://www.instagram.com/gobitsnbytes.noida/";

export default function Contact() {
  return (
    <PageWrapper>
      <main className="relative bg-linear-to-b from-[#06000f]/70 via-[#0d0518]/70 to-[#040007]/70 z-10 min-h-screen px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Hero */}
          <section className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
              CONTACT
            </p>

            <h1 className="mt-6 text-5xl font-bold uppercase leading-[0.9] text-white md:text-7xl">
              GET IN
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                TOUCH.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
              Questions, ideas, partnerships, or just want to build
              something interesting?
              <br />
              We'd love to hear from you.
            </p>
          </section>

          {/* Contact Cards */}
          <section className="mt-24">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="group rounded-2xl border border-purple-500/20 bg-[#0c0815]/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-purple-300">
                  Email
                </p>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {EMAIL}
                </h3>

                <p className="mt-4 text-sm text-zinc-400">
                  Best for partnerships, collaborations and general inquiries.
                </p>

                <div className="mt-8 text-purple-400 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </div>
              </a>

              {/* Discord */}
              <a
                href={DISCORD}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-purple-500/20 bg-[#0c0815]/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-purple-300">
                  Discord
                </p>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  Join the Community
                </h3>

                <p className="mt-4 text-sm text-zinc-400">
                  Meet builders, share ideas and stay updated.
                </p>

                <div className="mt-8 text-purple-400 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </div>
              </a>

              {/* Instagram */}
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-purple-500/20 bg-[#0c0815]/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-purple-300">
                  Instagram
                </p>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  @gobitsnbytes.noida
                </h3>

                <p className="mt-4 text-sm text-zinc-400">
                  Updates, announcements and community highlights.
                </p>

                <div className="mt-8 text-purple-400 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </div>
              </a>
            </div>
          </section>

          {/* Response Section */}
          <section className="mt-28 text-center">
            <h2 className="text-3xl font-bold uppercase text-white md:text-4xl">
              WHAT HAPPENS NEXT?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
              Reach out through any of the channels above.
              We'll get back to you as soon as possible.
            </p>
          </section>

          {/* Final CTA */}
          <section className="mt-28">
            <div className="rounded-3xl border border-purple-500/20 bg-[#0c0815]/60 p-10 text-center md:p-16">
              <h2 className="text-4xl font-bold uppercase text-white md:text-6xl">
                DON'T BUILD
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                  ALONE.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
                Join the community, meet ambitious builders and start
                working on things that matter.
              </p>

              <a
                href={DISCORD}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] active:scale-95"
              >
                JOIN DISCORD →
              </a>
            </div>
          </section>
        </div>
      </main>
    </PageWrapper>
  );
}