import Link from "next/dist/client/link";

type EventCardProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  href: string;
};

export default function EventCard({
  title,
  date,
  description,
  image,
  href,
}: EventCardProps) {
  return (
    <Link
      href={href}
      className="
    group
    block
    overflow-hidden
    rounded-[24px]
    border
    border-cyan-500/20
    bg-[#081225]/40
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-cyan-400/50
    hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
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
        <div className="mt-5 flex items-center justify-between">
  <span className="text-sm text-cyan-300">
    Explore Event
  </span>

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</div>
      </div>
    </Link>
  );
}