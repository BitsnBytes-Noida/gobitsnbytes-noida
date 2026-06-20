"use client";

import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-300">
            ERROR 404
          </p>
          <h1 className="mt-6 text-6xl font-bold uppercase leading-none text-white md:text-8xl">
            PAGE
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
              NOT FOUND
            </span>
          </h1>

          <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-2xl border border-blue-500/20 bg-black/60 text-left backdrop-blur">
            <div className="flex items-center gap-2 border-b border-blue-500/20 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <div className="space-y-2 p-6 font-mono text-sm">
              <p className="text-cyan-300">
                bits@noida:~$ open page
              </p>

              <p className="text-zinc-400">
                &gt; locating route...
              </p>

              <p className="text-zinc-400">
                &gt; checking deployment...
              </p>

              <p className="text-red-400">
                ✕ route not found
              </p>

              <p className="text-zinc-500">
                The page you're looking for doesn't exist.
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-purple-500/10 px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] active:scale-95"
          >
            RETURN HOME →
          </Link>
        </div>
      </main>
    </PageWrapper>
  );
}