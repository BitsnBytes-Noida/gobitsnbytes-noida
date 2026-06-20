import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-linear-to-b from-[#020617]/80 via-[#0f172a]/70 to-[#020617]/80 px-6 py-24">
      <div className="mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center">
        <div className="w-full max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            ERROR 404
          </p>

          <h1 className="mt-6 text-6xl font-bold uppercase leading-[0.9] text-white md:text-8xl">
            PAGE
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              NOT FOUND.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
            Looks like this route hasn't been built yet.
          </p>

          {/* Terminal */}
          <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl border border-blue-500/20 bg-black/60 text-left backdrop-blur">
            <div className="flex items-center gap-2 border-b border-blue-500/20 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <div className="p-6 font-mono text-sm">
              <p className="text-cyan-300">bits@noida:~$ open /unknown-route</p>

              <p className="mt-2 text-red-400">Error: route not found</p>

              <p className="mt-2 text-zinc-400">
                The page you're looking for doesn't exist.
              </p>

              <p className="mt-4 text-green-400">✓ try another path</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/">GO HOME →</Button>

            <Button href="/join" variant="secondary">
              JOIN NOIDA →
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
