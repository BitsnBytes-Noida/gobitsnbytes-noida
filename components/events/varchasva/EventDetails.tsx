import DetailCard from "../DetailCard";
import {
  Building2,
  Users,
  Ticket,
  GraduationCap,
  Shapes,
  BadgeCheck,
} from "lucide-react";

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

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <DetailCard
            icon={Building2}
            title="Organizer"
            value="Bits&Bytes Noida"
          />

          <DetailCard
            icon={Users}
            title="Team Size"
            value="2–4 Members"
          />

          <DetailCard
            icon={Ticket}
            title="Registration Fee"
            value="Free"
          />

          <DetailCard
            icon={GraduationCap}
            title="Eligibility"
            value="School & College Students"
          />

          <DetailCard
            icon={Shapes}
            title="Tracks"
            value="4 Official Tracks"
          />

          <DetailCard
            icon={BadgeCheck}
            title="Certificates"
            value="Provided"
          />

        </div>

      </div>
    </section>
  );
}