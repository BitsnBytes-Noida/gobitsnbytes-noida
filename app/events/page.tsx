import EventCard from "@/components/cards/EventsCard";
import {
  upcomingEvents,
  pastEvents,
} from "@/data/events";

export default function EventsPage() {
  return (
    <div className="relative">

      {/* Hero Glow */}
      <div className="absolute left-1/2 top-24 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <section
        className="
          relative
          z-10
          min-h-screen
          bg-gradient-to-b
          from-[#020617]/80
          via-[#0f172a]/70
          to-[#020617]/80
          px-6
          py-16
          text-[#e5e5e5]
          md:py-20
        "
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-[#020617]/20 backdrop-blur-[2px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Hero */}
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              EVENTS
            </p>

            <h1 className="mt-4 text-5xl font-bold text-white md:text-7xl">
              Building.
              <br />
              Learning.
              <br />
              Shipping.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
              Discover workshops, hackathons, meetups, and
              community events hosted by Bits & Bytes Noida.
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mt-24">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-cyan-500/20" />

              <h2 className="text-3xl font-bold text-white">
                Upcoming Events
              </h2>

              <div className="h-px flex-1 bg-cyan-500/20" />
            </div>

            {upcomingEvents.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    {...event}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[260px] flex-col items-center justify-center rounded-[24px] border border-dashed border-cyan-500/20 bg-[#081225]/30 text-center">
                <div className="text-5xl">🚀</div>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  No Upcoming Events
                </h3>

                <p className="mt-3 max-w-md text-zinc-400">
                  The next build session is loading...
                </p>
              </div>
            )}
          </section>

          {/* Past Events */}
          <section className="mt-24">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-cyan-500/20" />

              <h2 className="text-3xl font-bold text-white">
                Past Events
              </h2>

              <div className="h-px flex-1 bg-cyan-500/20" />
            </div>

            {pastEvents.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    {...event}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[260px] flex-col items-center justify-center rounded-[24px] border border-dashed border-cyan-500/20 bg-[#081225]/30 text-center">
                <div className="text-5xl">📚</div>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  No Past Events
                </h3>

                <p className="mt-3 max-w-md text-zinc-400">
                  Every community starts with its first event.
                </p>
              </div>
            )}
          </section>

        </div>
      </section>
    </div>
  );
}