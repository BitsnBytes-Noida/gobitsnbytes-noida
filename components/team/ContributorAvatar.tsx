type ContributorProps = {
    member: {
        name: string;
        image: string;
    };
};

export default function ContributorAvatar({
    member,
}: ContributorProps) {
    return (
        <div className="group flex flex-col items-center">
            <div
                className="
  overflow-hidden
  rounded-full
  border-2
  border-cyan-500/20
  transition-all
  duration-500
  group-hover:scale-105
  group-hover:border-cyan-400
  group-hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
"
            >
                <img
                    src={member.image}
                    alt={member.name}
                    className="h-40 w-40 object-cover"
                />
            </div>

            <p className="mt-3 text-center text-base font-medium text-zinc-300">
                {member.name}
            </p>
        </div>
    );
}