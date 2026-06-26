import { LucideIcon } from "lucide-react";

interface DetailCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function DetailCard({
  title,
  value,
  icon: Icon,
}: DetailCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-cyan-500/20
        bg-[#081225]/40
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/40
        hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
      "
    >
      <div className="mb-5 inline-flex rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3">
        <Icon className="h-7 w-7 text-cyan-300 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
      </div>

      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
        {title}
      </p>

      <h3 className="mt-3 text-xl font-semibold text-white">
        {value}
      </h3>
    </div>
  );
}