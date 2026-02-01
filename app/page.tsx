"use client";

import Image from "next/image";
import Link from "next/link";
import ElectricBorder from "@/components/ElectricBorder";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-slate-900 font-sans animus-glitch">
      {/* Floating Particles */}
      <div className="fixed inset-0 z-[15] pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle" style={{ bottom: "0" }} />
        ))}
      </div>

      {/* Greek Pattern Overlay */}
      <div className="fixed inset-0 z-[5] pointer-events-none meander-pattern opacity-20" />

      {/* --- Background --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900" />

        <Image
          src="/background.jpeg"
          alt="Trial of the Creed Background"
          fill
          className="object-cover opacity-60"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* --- Content --- */}
      <div className="relative z-10 flex h-screen flex-col items-center justify-center px-4 py-8 text-center">
        {/* Greek decorative element */}
        <div
          className="mb-3 text-amber-500 text-2xl md:text-3xl tracking-[0.8rem] font-light select-none"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          ⚔ REVIL PRESENTS ⚔
        </div>

        {/* Main Title */}
        <h1 className="title-font mb-2 text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-linear-to-b from-amber-100 to-amber-600 drop-shadow-sm">
          TRIAL OF THE CREED
        </h1>

        {/* Subtitle */}
        <p className="mb-4 text-lg md:text-xl text-amber-500 font-bold tracking-[0.3em] uppercase drop-shadow-md">
          Capture The Flag
        </p>

        {/* Odyssey Quote */}
        <div className="greek-border">
          <blockquote className="mb-4 max-w-xl text-base md:text-lg text-gray-300 italic leading-relaxed border-l-4 border-amber-600 pl-4 mx-4">
            &ldquo;The world is full of men who fight for glory. But only a few
            fight for what truly matters.&rdquo;
          </blockquote>
        </div>

        {/* Spartan decorative line */}
        <div className="mb-4 flex items-center gap-4 opacity-80">
          <div className="h-0.5 w-12 md:w-24 bg-linear-to-r from-transparent to-amber-500" />
          <div className="text-amber-500 text-xl animate-pulse">🏛</div>
          <div className="h-0.5 w-12 md:w-24 bg-linear-to-l from-transparent to-amber-500" />
        </div>

        {/* Description */}
        <p className="mb-6 max-w-lg text-sm md:text-base text-gray-400 leading-relaxed font-medium">
          Embrace your destiny as a{" "}
          <span className="text-amber-400 font-semibold glow">Misthios</span>.
          Navigate through ancient challenges, decode the secrets of the{" "}
          <span className="text-amber-400 font-semibold glow">
            First Civilization
          </span>
          , and prove your worth in the arena of hackers.
        </p>

        {/* Main CTA Button */}
        <ElectricBorder
          color="#d97706"
          speed={1.5}
          chaos={0.15}
          borderRadius={8}
          className="mb-4"
        >
          <Link
            href="https://ctfd.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-gradient-to-r from-amber-900/40 to-amber-800/40 backdrop-blur-sm px-8 py-3 text-base font-bold text-white uppercase tracking-widest transition-all duration-300 hover:from-amber-800/60 hover:to-amber-700/60"
          >
            <span className="relative z-10">Enter The Animus</span>
            <svg
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </ElectricBorder>

        {/* Creed motto */}
        <div className="mt-4 text-gray-500 text-xs tracking-[0.2em] uppercase font-mono">
          &ldquo;Nothing is true, everything is permitted&rdquo;
        </div>
      </div>
    </main>
  );
}
