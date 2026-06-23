type EventCardProps = {
  title: string;
  date: string;
  description: string;
  image: string;
};

export default function EventCard({
  title,
  date,
  description,
  image,
}: EventCardProps) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[24px]
        border
        border-cyan-500/20
        bg-[#081225]/40
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/50
      "
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-52
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-5">
        <p className="text-sm text-cyan-300">
          {date}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}