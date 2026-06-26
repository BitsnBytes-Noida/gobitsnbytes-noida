import { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  title: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  icon: Icon,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="group relative flex gap-6">

      {/* Timeline */}
      <div className="flex flex-col items-center">

        <div
          className="
            z-10
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border-2
            border-cyan-400
            bg-[#020617]
            shadow-[0_0_25px_rgba(34,211,238,0.25)]
            transition-all
            duration-300
            hover:scale-110
          "
        >
          <Icon
            className="
    h-6
    w-6
    text-cyan-300
    transition-transform
    duration-300
    group-hover:rotate-12
    group-hover:scale-110
  "
          />
        </div>

        {!isLast && (
          <div className="h-20 w-[2px] bg-gradient-to-b from-cyan-400/80 to-cyan-500/10" />
        )}

      </div>

      {/* Content */}
      <div
        className="
          mb-8
          flex-1
          rounded-2xl
          border
          border-cyan-500/20
          bg-[#081225]/40
          p-6
          transition-all
          duration-300
          hover:border-cyan-400/40
          hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
        "
      >
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
      </div>

    </div>
  );
}