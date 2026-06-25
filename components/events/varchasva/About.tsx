export default function About() {
  return (
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
  );
}