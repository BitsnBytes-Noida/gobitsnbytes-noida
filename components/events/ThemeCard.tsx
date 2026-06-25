interface ThemeCardProps {
  title: string;
}

export default function ThemeCard({
  title,
}: ThemeCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-cyan-500/20
        bg-[#081225]/40
        p-6
        text-white
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
      "
    >
      {title}
    </div>
  );
}