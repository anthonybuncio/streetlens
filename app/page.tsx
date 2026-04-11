import Link from "next/link";

const STATS = [
  { value: "2,400+", label: "Clips Uploaded" },
  { value: "Houston", label: "Coverage Area" },
  { value: "100%", label: "Free Access" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="scanlines relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-zinc-950"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      >
        {/* Ambient amber glow — top-left */}
        <div
          className="absolute -top-32 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 sm:px-10 py-20">
          <div className="max-w-3xl">

            {/* Live badge */}
            <div className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 border border-amber-500/25 rounded bg-amber-500/[0.07] animate-fade-up">
              <span className="rec-dot w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shrink-0" />
              <span className="font-data text-amber-400/90 text-[10px] tracking-[0.28em] uppercase">
                Public Database · Houston, TX · 29.7604° N, 95.3698° W
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-white leading-none tracking-wide mb-6 animate-fade-up-1"
              style={{ fontSize: "clamp(4.5rem, 12vw, 9rem)" }}
            >
              WITNESS
              <br />
              <span className="text-amber-400">EVERY</span>
              <br />
              STREET.
            </h1>

            {/* Sub-copy */}
            <p className="font-data text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mb-10 animate-fade-up-2">
              Search unlimited dashcam footage from a fully community-sourced,{" "}
              <span className="text-white">public</span> database. Upload your
              clips, discover events near you, and help keep streets safe.
              It&apos;s{" "}
              <span className="text-white font-semibold">FREE.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-16 animate-fade-up-3">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-data text-[11px] tracking-[0.18em] uppercase font-semibold px-7 py-3.5 rounded transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-px"
              >
                Get Started
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 7.5H10.293L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5a.5.5 0 010-1z"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/15 text-white/70 hover:border-white/40 hover:text-white hover:bg-white/[0.04] font-data text-[11px] tracking-[0.18em] uppercase px-7 py-3.5 rounded transition-all duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 animate-fade-up-4">
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="font-display text-white text-4xl md:text-5xl tracking-wider leading-none">
                    {value}
                  </span>
                  <span className="font-data text-zinc-500 text-[9px] tracking-[0.25em] uppercase">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none z-10" />
      </section>
    </>
  );
}
