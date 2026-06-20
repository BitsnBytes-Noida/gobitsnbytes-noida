import Link from "next/link";
import { exploreLinks } from "@/data/explore";

export default function ExploreSection() {
  return (
    <section className="mx-auto mt-32 max-w-7xl px-6">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
        {/* Left Content */}
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            EXPLORE
          </p>

          <h2 className="mt-4 text-5xl font-bold uppercase leading-[0.9] text-white md:text-6xl">
            BITS&BYTES
            <br />
            NOIDA
          </h2>

          <p className="mt-6 max-w-md text-lg text-zinc-400">
            Everything you need to know about the community, the builders,
            and how to get involved.
          </p>
        </div>

        {/* Right Cards */}
        <div className="grid w-full gap-6 md:grid-cols-2">
          {exploreLinks.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="group relative overflow-hidden rounded-3xl border border-blue-500/20 bg-[#0f172a]/50 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
            >
              {/* Large Number */}
              <span className="absolute right-6 top-4 text-7xl font-bold text-white/5">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="relative z-10 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="relative z-10 mt-4 text-zinc-400">
                {item.description}
              </p>

              <div className="relative z-10 mt-8 flex items-center gap-2 text-cyan-300 transition-all duration-300 group-hover:translate-x-1">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}