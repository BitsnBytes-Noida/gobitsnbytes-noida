import PrizeCard from "../PrizesCard";

export default function Prizes() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          REWARDS
        </p>

        <h2 className="mt-3 mb-6 text-4xl font-bold text-white">
          Prizes
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <PrizeCard title="Winner" />
          <PrizeCard title="Runner Up" />
          <PrizeCard title="Second Runner Up" />
        </div>

      </div>
    </section>
  );
}