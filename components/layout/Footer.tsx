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
          <div className="flex flex-wrap gap-x-12 gap-y-10">
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
                Network
              </p>
              <div className="flex flex-col gap-2 text-sm text-zinc-400">
                <a href="https://gobitsnbytes.org" target="_blank" rel="noreferrer">
                  bits&amp;bytes™ parent network
                </a>
                <a href="https://gobitsnbytes.org/fork" target="_blank" rel="noreferrer">
                  Fork network
                </a>
                <a href="https://gobitsnbytes.org/contact" target="_blank" rel="noreferrer">
                  Parent network contact
                </a>
                <a href="https://github.com/gobitsnbytes" target="_blank" rel="noreferrer">
                  Parent GitHub
                </a>
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

            <div className="max-w-[13rem]">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cyan-300">
                Trust Center
              </p>
              <p className="mb-4 text-xs leading-relaxed text-zinc-500">
                The public rules for a teen-led network: safety, privacy, brand stewardship, and participation standards.
              </p>
              <div className="flex flex-col gap-3 text-sm text-zinc-400">
                <a href="https://gobitsnbytes.org/terms" target="_blank" rel="noreferrer"><span className="text-zinc-200">Terms</span><span className="block text-xs text-zinc-500">Participation, Forks, money, and authority</span></a>
                <a href="https://gobitsnbytes.org/privacy" target="_blank" rel="noreferrer"><span className="text-zinc-200">Privacy</span><span className="block text-xs text-zinc-500">Data handling, minors, and guardian requests</span></a>
                <a href="https://gobitsnbytes.org/coc" target="_blank" rel="noreferrer"><span className="text-zinc-200">Code of Conduct</span><span className="block text-xs text-zinc-500">Safety, reporting, enforcement, and standards</span></a>
                <a href="https://gobitsnbytes.org/ip" target="_blank" rel="noreferrer"><span className="text-zinc-200">IP Policy</span><span className="block text-xs text-zinc-500">Brand use, logos, open-source, and claims</span></a>
                <a href="https://gobitsnbytes.org/press" target="_blank" rel="noreferrer"><span className="text-zinc-200">Press Kit</span><span className="block text-xs text-zinc-500">Official logos, facts, colors, and media contact</span></a>
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
