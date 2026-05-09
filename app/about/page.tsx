export default function About() {
  const noidaCore = [
    { name: "Aryan Chauhan", role: "Lead + Tech", image: "/team/aryan.png" },
    { name: "Nisha Rawat", role: "Operations Head", image: "/team/nisha.png" },
    {
      name: "Disha Yadav",
      role: "Creative & Design Head",
      image: "/team/disha.png",
    },
    {
      name: "Benny Vijay Daniel",
      role: "Sponsorship Head",
      image: "/team/benny.png",
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

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-[#e5e5e5] md:py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-5xl font-semibold uppercase tracking-tight md:text-7xl md:leading-[0.95]">
          ABOUT
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

        <section className="mt-14">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-[#9a9a9a]">
            NOIDA CORE
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {noidaCore.map((member) => (
              <div key={member.name} className="space-y-3">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="aspect-square w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-square w-full items-center justify-center bg-[#1a1a1a] text-2xl font-medium text-[#9a9a9a]">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
                <p className="text-base font-medium tracking-tight">
                  {member.name}
                </p>
                <p className="text-xs uppercase tracking-wide text-[#9a9a9a]">
                  {member.role}
                </p>
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
