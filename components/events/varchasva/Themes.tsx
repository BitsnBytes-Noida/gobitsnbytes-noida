import ThemeCard from "../ThemeCard";
import {
  Globe,
  Cpu,
  GraduationCap,
  Landmark,
} from "lucide-react";
export default function Themes() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          OFFICIAL TRACKS
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Choose Your Innovation Track
        </h2>

        <p className="mt-4 max-w-3xl text-zinc-400">
          Every participating team must select <span className="font-semibold text-cyan-300">one official track</span> for
          their solution. Each track addresses a unique real-world challenge and
          encourages innovative thinking.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <ThemeCard
            icon={Globe}
            title="Social Impact & Sustainability"
            description="Design solutions that address waste management, resource utilization, environmental sustainability, accessibility, and social inclusion."
          />

          <ThemeCard
            icon={Cpu}
            title="Technology & Innovation"
            description="Build technology-driven solutions using AI, IoT, Robotics, Blockchain, AR/VR, Automation, and other emerging technologies."
          />

          <ThemeCard
            icon={GraduationCap}
            title="Education"
            description="Create innovative solutions that improve learning experiences, bridge knowledge gaps, and prepare students for future opportunities."
          />

          <ThemeCard
            icon={Landmark}
            title="Governance"
            description="Develop solutions that improve transparency, citizen participation, accessibility, and public service delivery through innovation."
          />

        </div>

        <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 text-center">
          <p className="text-sm text-cyan-300">
            📌 Teams must select only <span className="font-semibold">one track</span> for their submission.
          </p>
        </div>

      </div>
    </section>
  );
}