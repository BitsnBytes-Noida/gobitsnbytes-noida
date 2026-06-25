import TimelineItem from "../TimelineItem";

export default function Timeline() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">

        <p className="text-center text-sm uppercase tracking-[0.3em] text-cyan-300">
          EVENT JOURNEY
        </p>

        <h2 className="mt-3 mb-12 text-center text-4xl font-bold text-white">
          Timeline
        </h2>

        <div className="space-y-8">

          <TimelineItem title="Registrations Open" />

          <TimelineItem title="Idea Submission" />

          <TimelineItem title="Mentoring Round" />

          <TimelineItem title="Final Presentation" />

          <TimelineItem title="Winner Announcement" />

        </div>

      </div>
    </section>
  );
}