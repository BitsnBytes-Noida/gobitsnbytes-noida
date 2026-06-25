interface DetailCardProps {
  title: string;
  value: string;
}

export default function DetailCard({
  title,
  value,
}: DetailCardProps) {
  return (
    <div
      className="
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
      <p className="text-sm uppercase tracking-wider text-cyan-300">
        {title}
      </p>

      <h3 className="mt-3 text-xl font-semibold text-white">
        {value}
      </h3>
    </div>
  );
}