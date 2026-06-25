import DetailCard from "../DetailCard";

export default function EventDetails() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          EVENT INFORMATION
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Event Details
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Everything you need to know before participating in
          Varchasva.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <DetailCard
            title="Date"
            value="Coming Soon"
          />

          <DetailCard
            title="Venue"
            value="Coming Soon"
          />

          <DetailCard
            title="Team Size"
            value="Coming Soon"
          />

          <DetailCard
            title="Prize Pool"
            value="Coming Soon"
          />
        </div>

      </div>
    </section>
  );
}