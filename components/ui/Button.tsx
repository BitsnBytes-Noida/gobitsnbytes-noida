import Link from "next/link";

type ButtonProps = {
    size?: "sm" | "md";
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};
export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: ButtonProps) {

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-8 py-4 text-sm",
};
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium uppercase tracking-wider transition-all duration-300 active:scale-95";

  const variants = {
  primary:
    "border border-purple-500/30 bg-purple-500/10 text-white hover:scale-105 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]",

    secondary:
      "border border-zinc-700 px-8 py-4 text-zinc-300 hover:border-purple-500 hover:text-white",
  };

  const styles = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}