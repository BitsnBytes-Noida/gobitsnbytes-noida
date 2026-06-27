import PrizeCard from "../PrizesCard";

export default function Prizes() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            REWARDS
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Prize Pool
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Win exciting cash prizes, certificates, goodies and
            internship opportunities by building innovative solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <PrizeCard
            position="🥇"
            prize="₹5,000"
            color="text-yellow-400"
          />

          <PrizeCard
            position="🥈"
            prize="₹3,000"
            color="text-zinc-300"
          />

          <PrizeCard
            position="🥉"
            prize="₹2,000"
            color="text-orange-400"
          />
        </div>

        <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 text-center">
          <p className="font-medium text-cyan-300">
            🎁 Plus certificates, goodies, networking opportunities and exciting surprises for top-performing teams.
          </p>
        </div>

      </div>
    </section>
  );
}