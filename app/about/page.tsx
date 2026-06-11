export default function About() {
  const noidaCore = [
    {
      name: "Aryan Chauhan",
      role: "Lead",
      image: "/team/aryan.png",
      bio: "Building the technical backbone of Bits&Bytes Noida.",
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
    {
      name: "Tanish Garg",
      role: "Tech Lead",
      image: "/team/tanish.png",
      bio: "Leading the development of our digital platforms.",
    }
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

  return (
    <main className="relative z-10 min-h-screen bg-gradient-to-b from-[#06000f]/70 via-[#0d0518]/70 to-[#040007]/70 px-6 py-16 text-[#e5e5e5] md:py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold uppercase tracking-tight text-white md:text-7xl md:leading-[0.95]">
          <span className="bg-linear-to-r from-purple-400 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
            ABOUT
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

        <section className="relative mt-14">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#9a9a9a]">
            NOIDA CORE
          </h2>
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-700/20 blur-3xl" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {noidaCore.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-[#0c0815]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-square w-full object-cover transition-all duration-500 group-hover:scale-110"
                />

                {/* Purple Glow */}
                <div className="absolute inset-0 bg-purple-600/0 transition-all duration-500 group-hover:bg-purple-600/10" />

                {/* Overlay */}
                <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-gradient-to-t from-[#12001f] via-[#12001fdc] to-transparent p-5 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-xs uppercase tracking-wider text-purple-300">
                    {member.role}
                  </p>

                  <div className="mt-3 h-px w-full bg-purple-500/30" />

                  <p className="mt-3 text-sm text-zinc-300">{member.bio}</p>
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
            The founders of Bits&amp;Bytes. Reproduced from the parent org.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-8">
            {founders.map((member) => (
              <div key={member.name} className="flex items-center gap-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-16 w-16 rounded-full object-cover"
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

        <section className="mt-20">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#9a9a9a]">
            REACH US
          </h2>
          <div className="mt-6 space-y-2">
            <a
              href="mailto:noida@gobitsnbytes.org"
              className="block text-base text-[#e5e5e5] underline underline-offset-4 hover:text-white transition-colors"
            >
              noida@gobitsnbytes.org
            </a>
            <a
              href="https://www.instagram.com/gobitsnbytes.noida/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base text-[#e5e5e5] underline underline-offset-4 hover:text-white transition-colors"
            >
              @gobitsnbytes.noida
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
