'use client';

import PageWrapper from "@/components/effects/PageWrapper";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
export default function VarchasvaPage() {
  const galleryImages = [
    "/events/varchasva/1.jpg",
    "/events/varchasva/2.jpg",
    "/events/varchasva/3.jpg",
    "/events/varchasva/4.jpg",
    "/events/varchasva/5.jpg",
    "/events/varchasva/6.jpg",
  ];
  const faqs = [
    {
      question: "Is there a registration fee?",
      answer:
        "No. Participation in Varchasva is completely free. There are no registration charges for any eligible participant.",
    },
    {
      question: "Can I participate individually?",
      answer:
        "No. Individual participation is not allowed. Every participant must register as part of a team. Team formation guidelines and the maximum team size will be shared in the official rulebook.",
    },
    {
      question: "Do I need a prototype?",
      answer:
        "No. A working prototype is not required during registration. However, teams are encouraged to develop and present a prototype during the ideathon to better demonstrate their solution.",
    },
    {
      question: "Can school students participate?",
      answer:
        "Yes. Varchasva welcomes school students who are passionate about innovation and problem-solving, subject to the eligibility criteria announced by the organizers.",
    },
    {
      question: "How many members per team?",
      answer:
        "Teams can have up to 4 members. Working in teams allows participants to combine diverse skills and build stronger solutions.",
    },
  ];
  return (
    <PageWrapper>
      <div className="relative">

      {/* Hero Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <section className="relative z-10 min-h-screen bg-gradient-to-b from-[#020617]/80 via-[#0f172a]/70 to-[#020617]/80">

        {/* HERO */}
        <section className="px-6 py-28 md:py-36">
          <div className="mx-auto max-w-7xl text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              FLAGSHIP IDEATHON
            </p>

            <h1 className="mt-6 text-6xl font-black text-white md:text-8xl">
              VARCHASVA
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Where Ideas Become Impact.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105">
                Register Now
              </button>

              <button className="rounded-xl border border-cyan-500/20 px-6 py-3 text-white transition hover:border-cyan-400">
                Event Brochure
              </button>
            </div>
            <div className="mt-16 flex justify-center">
              <a
                href="#about"
                className="
      group
      flex
      flex-col
      items-center
      gap-2
      text-zinc-400
      transition-colors
      duration-300
      hover:text-cyan-300
    "
              >
                <span className="text-xs uppercase tracking-[0.3em]">
                  Scroll to Explore
                </span>

                <svg
                  className="h-7 w-7 animate-bounce transition-transform duration-300 group-hover:translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14m0 0-6-6m6 6 6-6"
                  />
                </svg>
              </a>
            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="px-6 py-16 md:py-20"
        >
          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-10 lg:grid-cols-[0.35fr_0.65fr]">

              {/* POSTER */}
              <div
                className="
          overflow-hidden
          rounded-[28px]
          border
          border-cyan-500/20
          bg-[#081225]/40
          p-3
          transition-all
          duration-500
          hover:border-cyan-400/40
          hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
        "
              >
                <img
                  src="/events/varchasva/poster.png"
                  alt="Varchasva Poster"
                  className="w-full rounded-[20px]"
                />
              </div>

              {/* CONTENT */}
              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  THE IDEATHON
                </p>

                <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                  About Varchasva
                </h2>

                <p className="mt-6 max-w-3xl leading-relaxed text-zinc-400">
                  Varchasva is a city-wide ideathon bringing together students,
                  developers, designers, innovators, and problem-solvers to
                  develop solutions for real-world challenges across education,
                  governance, sustainability, and technology.
                </p>

                <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
                  More than just a competition, Varchasva is a platform where
                  ambitious minds collaborate, validate ideas, and transform
                  concepts into impactful solutions through innovation,
                  execution, and leadership.
                </p>

                {/* HIGHLIGHT CHIPS */}
                <div className="mt-8 flex flex-wrap gap-3">

                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-300">
                    Innovation
                  </span>

                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-300">
                    Execution
                  </span>

                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-300">
                    Problem Solving
                  </span>

                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-300">
                    Leadership
                  </span>

                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-300">
                    Dominance
                  </span>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* GALLERY */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">

            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              COMMUNITY HIGHLIGHTS
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white">
              Bits&Bytes Moments
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
              A glimpse into the builders, events and moments
              that shape the Bits&Bytes community.
            </p>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">

              {/* Large Left */}
              <div className="group overflow-hidden rounded-[24px] border border-cyan-500/20 lg:row-span-2">
                <img
                  src={galleryImages[0]}
                  alt=""
                  className="
        h-[520px]
        w-full
        object-cover
        transition-all
        duration-700
        group-hover:scale-105
      "
                />
              </div>

              {/* Top Right */}
              <div className="group overflow-hidden rounded-[24px] border border-cyan-500/20">
                <img
                  src={galleryImages[1]}
                  alt=""
                  className="
        h-[250px]
        w-full
        object-cover
        transition-all
        duration-700
        group-hover:scale-105
      "
                />
              </div>

              <div className="group overflow-hidden rounded-[24px] border border-cyan-500/20">
                <img
                  src={galleryImages[2]}
                  alt=""
                  className="
        h-[250px]
        w-full
        object-cover
        transition-all
        duration-700
        group-hover:scale-105
      "
                />
              </div>

              <div className="group overflow-hidden rounded-[24px] border border-cyan-500/20">
                <img
                  src={galleryImages[3]}
                  alt=""
                  className="
        h-[250px]
        w-full
        object-cover
        transition-all
        duration-700
        group-hover:scale-105
      "
                />
              </div>

              <div className="group overflow-hidden rounded-[24px] border border-cyan-500/20">
                <img
                  src={galleryImages[4]}
                  alt=""
                  className="
        h-[250px]
        w-full
        object-cover
        transition-all
        duration-700
        group-hover:scale-105
      "
                />
              </div>

              {/* Large Bottom Right */}
              <div className="group overflow-hidden rounded-[24px] border border-cyan-500/20 lg:col-span-2">
                <img
                  src={galleryImages[5]}
                  alt=""
                  className="
        h-[250px]
        w-full
        object-cover
        transition-all
        duration-700
        group-hover:scale-105
      "
                />
              </div>

            </div>
          </div>
        </section>
        {/* EVENT DETAILS */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">

            <h2 className="mb-6 text-4xl font-bold text-white">
              Event Details
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <DetailCard title="Date" value="Coming Soon" />
              <DetailCard title="Venue" value="Coming Soon" />
              <DetailCard title="Team Size" value="Coming Soon" />
              <DetailCard title="Prize Pool" value="Coming Soon" />

            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">

            <h2 className="mb-12 text-center text-4xl font-bold text-white">
              Timeline
            </h2>

            <div className="space-y-8">

              <TimelineItem title="Registrations Open" />
              <TimelineItem title="Idea Submission" />
              <TimelineItem title="Mentoring Round" />
              <TimelineItem title="Final Presentation" />
              <TimelineItem title="Winner Announcement" />

            </div>

          </div>
        </section>

        {/* THEMES */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">

            <h2 className="mb-6 text-4xl font-bold text-white">
              Themes
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              <ThemeCard title="Artificial Intelligence" />
              <ThemeCard title="Healthcare" />
              <ThemeCard title="Education" />
              <ThemeCard title="Sustainability" />
              <ThemeCard title="FinTech" />
              <ThemeCard title="Open Innovation" />

            </div>

          </div>
        </section>

        {/* PRIZES */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">

            <h2 className="mb-6 text-4xl font-bold text-white">
              Prizes
            </h2>

            <div className="grid gap-6 md:grid-cols-3">

              <PrizeCard title="Winner" />
              <PrizeCard title="Runner Up" />
              <PrizeCard title="Second Runner Up" />

            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">

            <p className="text-center text-sm uppercase tracking-[0.3em] text-cyan-300">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="mt-3 text-center text-4xl font-bold text-white md:text-5xl">
              Everything You Need to Know
            </h2>

            <div className="mt-12 space-y-4">

              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-28 md:py-36">
          <div className="mx-auto max-w-4xl rounded-[32px] border border-cyan-500/20 bg-[#081225]/40 p-12 text-center">

            <h2 className="text-5xl font-bold text-white">
              Ready to Dominate?
            </h2>

            <p className="mt-6 text-zinc-400">
              Join Varchasva and turn your ideas into reality.
            </p>

            <button className="mt-8 rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105">
              Register Now
            </button>

          </div>
        </section>

      </section>
    </div>
    </PageWrapper>
  );
}

function DetailCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#081225]/40 p-6">
      <p className="text-sm uppercase tracking-wider text-cyan-300">{title}</p>
      <h3 className="mt-3 text-xl font-semibold text-white">{value}</h3>
    </div>
  );
}

function TimelineItem({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-6">
      <div className="h-4 w-4 rounded-full bg-cyan-400" />
      <div className="rounded-xl border border-cyan-500/20 bg-[#081225]/40 px-6 py-4 text-white">
        {title}
      </div>
    </div>
  );
}

function ThemeCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#081225]/40 p-6 text-white">
      {title}
    </div>
  );
}

function PrizeCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#081225]/40 p-8 text-center">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-zinc-400">Coming Soon</p>
    </div>
  );
}


function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
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
    ${open
          ? "border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.12)]"
          : "border-cyan-500/20"
        }
  `}
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          px-6
          py-5
          text-left
        "
      >
        <span className="text-lg font-semibold text-white">
          {question}
        </span>

        <ChevronDown
          className={`h-5 w-5 text-cyan-300 transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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