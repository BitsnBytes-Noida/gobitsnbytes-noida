import { noidaCore } from "@/data/team";

export default function CoreTeamOrbit() {
  const lead = noidaCore[0];
  const members = noidaCore.slice(1);

  return (
    <div className="mx-auto mt-12 max-w-7xl">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] grid-cols-1">

        {/* TEAM LEAD */}
        <div className="group relative overflow-hidden rounded-[32px] border border-cyan-500/20 bg-[#081225]/40">
          <img
            src={lead.image}
            alt={lead.name}
            className="h-[400px] md:h-[500px] lg:h-[620px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />

          <div className="absolute bottom-8 left-8 z-10">
            <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                Fork Lead
              </span>
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              {lead.name}
            </h2>

            <p className="mt-2 text-cyan-300">
              {lead.role}
            </p>
          </div>
        </div>

        {/* CORE TEAM */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {members.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-[24px] border border-cyan-500/20 bg-[#081225]/40"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-[260px] md:h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-cyan-300">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}