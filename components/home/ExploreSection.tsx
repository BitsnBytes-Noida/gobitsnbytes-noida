import Link from "next/link";
import { exploreLinks } from "@/data/explore";
import TiltCard from "../common/TiltCard";


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
            Everything you need to know about the community, the builders, and
            how to get involved.
          </p>
        </div>

        {/* Right Cards */}
        <div className="grid w-full gap-6 md:grid-cols-2">
          {exploreLinks.map((item, index) => (
            <TiltCard key={item.title}>
              <Link
                
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="
group
relative
flex
min-h-[260px]
flex-col
justify-between
overflow-hidden
rounded-3xl
border
border-cyan-500/10
bg-gradient-to-br
from-[#08111f]
to-[#0b1324]
p-8
backdrop-blur-xl
transition-all
duration-500
hover:border-cyan-400/40
hover:shadow-[0_25px_80px_rgba(34,211,238,0.15)]

"
              >
                {/* Cursor Glow */}
                <div className="card-glow absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Border Glow */}
                <div className="absolute inset-0 z-0 rounded-3xl border border-cyan-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                </div>
                <h3
                  style={{ transform: "translateZ(40px)" }}
                  className="
relative
z-10
text-3xl
font-bold
text-white
transition-transform
duration-300
group-hover:-translate-y-1
"
                >
                  {item.title}
                </h3>

                <p
                  style={{ transform: "translateZ(25px)" }}
                  className="relative z-10 mt-4 text-zinc-400"
                >
                  {item.description}
                </p>

                <div
                  style={{ transform: "translateZ(60px)" }}
                  className="
relative
z-10
mt-8
text-cyan-300
transition-all
duration-300
group-hover:translate-x-2
"
                >
                  Learn More →
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
