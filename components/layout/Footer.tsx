import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-purple-500/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              BITS&BYTES NOIDA
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
              Building in public. Connecting builders. Shipping ideas.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-12">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-300">
                Navigate
              </p>

              <div className="flex flex-col gap-2 text-sm text-zinc-400">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/join">Join</Link>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-300">
                Socials
              </p>

              <div className="flex flex-col gap-2 text-sm text-zinc-400">
                <a
                  href="https://github.com/gobitsnbytes-noida"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://www.instagram.com/gobitsnbytes.noida"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-purple-500/10 pt-6 text-sm text-zinc-500">
          © 2026 Bits&Bytes Noida
        </div>
      </div>
    </footer>
  );
}