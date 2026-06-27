interface PrizeCardProps {
  position: string;
  prize: string;
  title?: string;
  color: string;
}

export default function PrizeCard({
  position,
  prize,
  title = "Prize",
  color,
}: PrizeCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-cyan-500/20
        bg-[#081225]/40
        p-8
        text-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
      "
    >
      <div className={`text-5xl ${color}`}>
        {position}
      </div>

      <p className="mt-5 text-sm uppercase tracking-[0.2em] text-zinc-400">
        {title}
      </p>

      <h3 className="mt-3 text-4xl font-bold text-white">
        {prize}
      </h3>
    </div>
  );
}