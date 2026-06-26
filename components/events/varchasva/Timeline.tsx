import TimelineItem from "../TimelineItem";
import {
  UserPlus,
  Users,
  Lightbulb,
  FileText,
  Presentation,
  Trophy,
  Icon,
} from "lucide-react";

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

        <div className="mt-12">
          
          <TimelineItem
            icon={UserPlus}
            title="Registrations Open"
          />

          <TimelineItem
            icon={Users}
            title="Meet & Greet Session"
          />

          <TimelineItem
            icon={Lightbulb}
            title="Idea Preparation"
          />

          <TimelineItem
            icon={FileText}
            title="Pitch Deck Submission"
          />

          <TimelineItem
            icon={Presentation}
            title="Final Presentation"
          />

          <TimelineItem
            icon={Trophy}
            title="Winner Announcement"
            isLast
          />

        </div>

      </div>
    </section>
  );
}