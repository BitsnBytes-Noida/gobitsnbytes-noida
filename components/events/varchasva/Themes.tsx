import ThemeCard from "../ThemeCard";

export default function Themes() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          INNOVATION TRACKS
        </p>

        <h2 className="mt-3 mb-6 text-4xl font-bold text-white">
          Themes
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ThemeCard title="Artificial Intelligence" />
          <ThemeCard title="Healthcare" />
          <ThemeCard title="Education" />
          <ThemeCard title="Sustainability" />
          <ThemeCard title="FinTech" />
          <ThemeCard title="Open Innovation" />
        </div>

      </div>
    </section>
  );
}