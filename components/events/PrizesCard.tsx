interface PrizeCardProps {
  title: string;
}

export default function PrizeCard({
  title,
}: PrizeCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-cyan-500/20
        bg-[#081225]/40
        p-8
        text-center
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
      "
    >
      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-zinc-400">
        Coming Soon
      </p>
    </div>
  );
}