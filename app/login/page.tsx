import LoginButtons from "../_components/LoginButtons";

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "2,400+ incidents mapped across Houston",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    label: "100% community-sourced footage",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m17.25 2.625h-1.5c-.621 0-1.125-.504-1.125-1.125M20.625 19.5V5.625m0 12.75v-1.5c0-.621-.504-1.125-1.125-1.125M20.625 5.625v-1.5c0-.621-.504-1.125-1.125-1.125H4.5c-.621 0-1.125.504-1.125 1.125v1.5m17.25 0V18.375c0 .621-.504 1.125-1.125 1.125M3.375 5.625V18.375" />
      </svg>
    ),
    label: "Free upload and browse — always",
  },
];

export default function Login() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">

      {/* ── Left — Branding panel ─────────────────────────────── */}
      <div
        className="hidden md:flex md:w-[55%] relative flex-col justify-between px-12 lg:px-20 py-16 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      >
        {/* Scanline overlay */}
        <div className="scanlines absolute inset-0 pointer-events-none" />

        {/* Ambient glow */}
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.09) 0%, transparent 65%)",
          }}
        />

        {/* Top: logo mark */}
        <div className="relative z-10 flex items-center gap-3">
          <span className="font-display text-white text-2xl tracking-wider leading-none">
            STREETLENS
          </span>
          <div className="flex items-center gap-1.5">
            <span className="rec-dot w-1.5 h-1.5 rounded-full bg-red-500 inline-block shrink-0" />
            <span className="font-data text-red-400/70 text-[9px] tracking-[0.22em] uppercase">
              Live
            </span>
          </div>
        </div>

        {/* Center: headline */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-amber-500/25 rounded bg-amber-500/[0.07]">
            <span className="rec-dot w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shrink-0" />
            <span className="font-data text-amber-400/90 text-[10px] tracking-[0.28em] uppercase">
              Houston, TX · 29.7604°N 95.3698°W
            </span>
          </div>

          <h1
            className="font-display text-white leading-none tracking-wide mb-8"
            style={{ fontSize: "clamp(3.5rem, 5.5vw, 6.5rem)" }}
          >
            ACCESS
            <br />
            THE{" "}
            <span className="text-amber-400">FEED.</span>
          </h1>

          {/* Feature list */}
          <ul className="flex flex-col gap-4">
            {FEATURES.map(({ icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="text-amber-500/60 shrink-0">{icon}</span>
                <span className="font-data text-zinc-400 text-xs tracking-[0.08em]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom: coordinates */}
        <p className="relative z-10 font-data text-zinc-700 text-[10px] tracking-[0.15em] uppercase">
          &copy; {new Date().getFullYear()} Apptelligence Labs
        </p>
      </div>

      {/* ── Right — Auth card ─────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center px-8 py-16 border-l border-zinc-800/60">
        <div className="w-full max-w-sm">

          {/* Card header */}
          <div className="mb-8 text-center">
            {/* Mobile logo */}
            <div className="flex md:hidden items-center justify-center gap-2 mb-6">
              <span className="font-display text-white text-2xl tracking-wider">STREETLENS</span>
              <div className="flex items-center gap-1">
                <span className="rec-dot w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-zinc-800 rounded bg-zinc-900/50">
              <span className="font-data text-zinc-500 text-[9px] tracking-[0.22em] uppercase">
                Secure Sign-in
              </span>
            </div>

            <h2 className="font-display text-white text-4xl sm:text-5xl tracking-wider leading-none mb-2">
              AUTHENTICATE.
            </h2>
            <p className="font-data text-zinc-500 text-xs tracking-[0.1em]">
              Create an account or continue to your feed.
            </p>
          </div>

          {/* Buttons */}
          <LoginButtons />

          {/* Terms */}
          <p className="font-data text-zinc-600 text-[10px] tracking-[0.07em] text-center mt-6 leading-relaxed">
            By continuing, you agree to our{" "}
            <a
              href="/terms-of-service"
              className="text-zinc-400 hover:text-amber-400 underline underline-offset-2 transition-colors duration-150"
            >
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a
              href="/privacy-policy"
              className="text-zinc-400 hover:text-amber-400 underline underline-offset-2 transition-colors duration-150"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
