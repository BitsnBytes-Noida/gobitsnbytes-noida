import { ArrowRight, LucideIcon } from "lucide-react";

interface ThemeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ThemeCard({
  title,
  description,
  icon: Icon,
}: ThemeCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-cyan-500/20
        bg-[#081225]/40
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/40
        hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
      "
    >
      <div className="mb-6 inline-flex rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3">
        <Icon className="h-7 w-7 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />
      </div>

      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-zinc-400">
        {description}
      </p>

      {/* <div className="mt-6 flex items-center gap-2 text-cyan-300">
        <span className="text-sm font-medium">
          Explore Track
        </span>

        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div> */}
    </div>
  );
}