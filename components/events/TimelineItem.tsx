interface TimelineItemProps {
  title: string;
}

export default function TimelineItem({
  title,
}: TimelineItemProps) {
  return (
    <div className="flex items-center gap-6">
      <div className="h-4 w-4 rounded-full bg-cyan-400" />

      <div className="rounded-xl border border-cyan-500/20 bg-[#081225]/40 px-6 py-4 text-white transition-all duration-300 hover:border-cyan-400/40">
        {title}
      </div>
    </div>
  );
}