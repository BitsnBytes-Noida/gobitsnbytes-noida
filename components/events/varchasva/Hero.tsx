export default function Hero() {
  return (
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
            className="group flex flex-col items-center gap-2 text-zinc-400 transition-colors duration-300 hover:text-cyan-300"
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
  );
}