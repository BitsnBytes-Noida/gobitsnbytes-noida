type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

type TeamCardProps = {
  member: TeamMember;
  active: boolean;
  onClick: () => void;
};

export default function TeamCard({
  member,
  active,
  onClick,
}: TeamCardProps) {
  return (
    <div
      onClick={onClick}
      className="group w-full cursor-pointer [perspective:1000px]"
    >
      <div
        className={`relative h-[340px] w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] sm:h-[360px] ${
          active
            ? "[transform:rotateY(180deg)]"
            : "md:group-hover:[transform:rotateY(180deg)]"
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-purple-500/20 bg-[#0c0815] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
          <div className="aspect-square overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-white">
              {member.name}
            </h3>

            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-purple-300">
              {member.role}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-2xl border border-purple-500/30 bg-[#080510] p-6 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex h-full flex-col">
            <div>
              <p className="font-mono text-xs text-purple-400">
                ROLE
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                {member.role}
              </h3>
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs text-purple-400">
                MISSION
              </p>

              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {member.bio}
              </p>
            </div>

            <div className="mt-auto flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

              <span className="font-mono text-xs text-green-400">
                ONLINE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}