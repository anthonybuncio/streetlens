"use client";

import { useState } from "react";
import Link from "next/link";

// ── Data ──────────────────────────────────────────────────────────────────────

const HIGHLIGHTS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
    title: "Unlimited Uploads",
    desc: "No monthly caps. Upload every clip from every drive — your entire dashcam history, fully archived.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    title: "Incident Alerts",
    desc: "Get notified the moment a new clip is uploaded within your chosen radius — street, zip code, or city-wide.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    title: "Download for Claims",
    desc: "Export any clip in full quality for insurance reports, police filings, or personal records. One click, always.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Advanced Filters",
    desc: "Filter by date range, vehicle type, zip code, street name, or time of day. Find exactly what you need in seconds.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Priority Map Pins",
    desc: "Your submitted clips surface first on the map. Build your reputation as a trusted community contributor.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "4K Video Support",
    desc: "Upload and stream dashcam footage up to 4K resolution. Capture license plates, faces, and fine details clearly.",
  },
];

const COMPARISON = [
  { feature: "Browse all incidents",     free: true,           premium: true },
  { feature: "Interactive map view",     free: true,           premium: true },
  { feature: "Clip uploads per month",   free: "5 clips",      premium: "Unlimited" },
  { feature: "Max video quality",        free: "720p",         premium: "Up to 4K" },
  { feature: "Advanced search filters",  free: false,          premium: true },
  { feature: "Download footage",         free: false,          premium: true },
  { feature: "Incident alerts",          free: false,          premium: true },
  { feature: "Priority map pins",        free: false,          premium: true },
  { feature: "Ad-free experience",       free: false,          premium: true },
  { feature: "Priority support",         free: false,          premium: true },
  { feature: "Early feature access",     free: false,          premium: true },
];

const MONTHLY_PRICE = 7.99;
const YEARLY_PRICE = 59.99;

// ── Helpers ───────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-amber-400 shrink-0">
      <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-zinc-700 shrink-0">
      <path d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z" />
    </svg>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Premium() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  const monthlyEquiv =
    billing === "monthly"
      ? MONTHLY_PRICE
      : parseFloat((YEARLY_PRICE / 12).toFixed(2));
  const savingsPct = Math.round((1 - YEARLY_PRICE / 12 / MONTHLY_PRICE) * 100);

  return (
    <div className="bg-zinc-950 text-white min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="scanlines relative overflow-hidden border-b border-zinc-800/60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      >
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(245,158,11,0.1) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-amber-500/30 rounded bg-amber-500/[0.08]">
            <span className="rec-dot w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shrink-0" />
            <span className="font-data text-amber-400 text-[10px] tracking-[0.28em] uppercase">
              StreetLens Premium
            </span>
          </div>

          <h1
            className="font-display text-white leading-none tracking-wide mx-auto animate-fade-up"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
          >
            UNLOCK THE
            <br />
            <span className="text-amber-400">FULL FEED.</span>
          </h1>

          <p className="font-data text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-6 animate-fade-up-1">
            Go beyond browsing. Upload without limits, get instant alerts, and
            download footage for insurance claims — all for less than a coffee a month.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8 animate-fade-up-2">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-data text-[11px] tracking-[0.18em] uppercase font-semibold px-8 py-3.5 rounded transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-px"
            >
              See Pricing
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L7.5 13.293V1.5A.5.5 0 018 1z" />
              </svg>
            </a>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 border border-white/15 text-white/60 hover:border-white/40 hover:text-white font-data text-[11px] tracking-[0.18em] uppercase px-8 py-3.5 rounded transition-all duration-200"
            >
              Browse Free
            </Link>
          </div>
        </div>
      </section>

      {/* ── Feature highlights ─────────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 sm:px-10 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="font-data text-amber-400/70 text-[10px] tracking-[0.3em] uppercase">
            What you get
          </span>
          <h2 className="font-display text-white text-4xl sm:text-5xl md:text-6xl tracking-wider mt-2">
            BUILT FOR SERIOUS
            <br />
            <span className="text-amber-400">CONTRIBUTORS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HIGHLIGHTS.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col gap-4 p-6 rounded-xl border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-amber-500/20 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg border border-amber-500/20 bg-amber-500/[0.07] flex items-center justify-center text-amber-400 group-hover:bg-amber-500/10 transition-colors duration-200">
                {icon}
              </div>
              <div>
                <h3 className="font-display text-white text-xl tracking-wider mb-1">
                  {title.toUpperCase()}
                </h3>
                <p className="font-data text-zinc-500 text-xs leading-relaxed tracking-wide">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Comparison ─────────────────────────────────────────── */}
      <section className="border-t border-zinc-800/60">
        <div className="max-w-screen-lg mx-auto px-6 sm:px-10 py-16 md:py-24">
          <div className="text-center mb-12">
            <span className="font-data text-amber-400/70 text-[10px] tracking-[0.3em] uppercase">
              Free vs Premium
            </span>
            <h2 className="font-display text-white text-4xl sm:text-5xl tracking-wider mt-2">
              COMPARE PLANS.
            </h2>
          </div>

          {/* Table */}
          <div className="rounded-xl overflow-x-auto border border-zinc-800/60">
            <div className="min-w-[480px]">
            {/* Header row */}
            <div className="grid grid-cols-3 bg-zinc-900/60 border-b border-zinc-800/60">
              <div className="px-6 py-4">
                <span className="font-data text-zinc-500 text-[10px] tracking-[0.2em] uppercase">
                  Feature
                </span>
              </div>
              <div className="px-6 py-4 border-l border-zinc-800/60 text-center">
                <span className="font-data text-zinc-400 text-[10px] tracking-[0.2em] uppercase">
                  Free
                </span>
              </div>
              <div className="px-6 py-4 border-l border-amber-500/20 text-center bg-amber-500/[0.04]">
                <div className="flex items-center justify-center gap-2">
                  <span className="rec-dot w-1 h-1 rounded-full bg-amber-400 inline-block" />
                  <span className="font-data text-amber-400 text-[10px] tracking-[0.2em] uppercase">
                    Premium
                  </span>
                </div>
              </div>
            </div>

            {/* Feature rows */}
            {COMPARISON.map(({ feature, free, premium }, i) => (
              <div
                key={feature}
                className={`grid grid-cols-3 border-b border-zinc-800/40 last:border-0 ${
                  i % 2 === 0 ? "bg-zinc-950" : "bg-zinc-900/20"
                }`}
              >
                <div className="px-6 py-3.5 flex items-center">
                  <span className="font-data text-zinc-400 text-xs tracking-[0.06em]">
                    {feature}
                  </span>
                </div>
                <div className="px-6 py-3.5 border-l border-zinc-800/40 flex items-center justify-center">
                  {free === true ? (
                    <CheckIcon />
                  ) : free === false ? (
                    <XIcon />
                  ) : (
                    <span className="font-data text-zinc-500 text-[11px] tracking-[0.08em]">
                      {free}
                    </span>
                  )}
                </div>
                <div className="px-6 py-3.5 border-l border-amber-500/15 bg-amber-500/[0.03] flex items-center justify-center">
                  {premium === true ? (
                    <CheckIcon />
                  ) : premium === false ? (
                    <XIcon />
                  ) : (
                    <span className="font-data text-amber-400 text-[11px] tracking-[0.08em] font-semibold">
                      {premium}
                    </span>
                  )}
                </div>
              </div>
            ))}
            </div>{/* end min-w wrapper */}
          </div>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────────── */}
      <section id="pricing" className="border-t border-zinc-800/60">
        <div
          className="py-16 md:py-24"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        >
          <div className="max-w-screen-xl mx-auto px-6 sm:px-10">
            <div className="text-center mb-10">
              <span className="font-data text-amber-400/70 text-[10px] tracking-[0.3em] uppercase">
                Simple Pricing
              </span>
              <h2 className="font-display text-white text-4xl sm:text-5xl tracking-wider mt-2">
                ONE PLAN.
                <br />
                <span className="text-amber-400">EVERYTHING INCLUDED.</span>
              </h2>
            </div>

            {/* Billing toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <button
                onClick={() => setBilling("monthly")}
                className={`font-data text-[11px] tracking-[0.15em] uppercase px-5 py-2 rounded transition-all duration-150 ${
                  billing === "monthly"
                    ? "bg-zinc-800 text-white border border-zinc-700"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                className={`font-data text-[11px] tracking-[0.15em] uppercase px-5 py-2 rounded transition-all duration-150 relative ${
                  billing === "yearly"
                    ? "bg-zinc-800 text-white border border-zinc-700"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                Yearly
                <span className="absolute -top-2.5 -right-2 font-data text-[8px] tracking-[0.1em] uppercase bg-amber-500 text-zinc-950 px-1.5 py-0.5 rounded font-semibold">
                  Save {savingsPct}%
                </span>
              </button>
            </div>

            {/* Pricing cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

              {/* Free card */}
              <div className="flex flex-col p-8 rounded-xl border border-zinc-800/60 bg-zinc-900/20">
                <div className="mb-6">
                  <span className="font-data text-zinc-500 text-[10px] tracking-[0.25em] uppercase">
                    Free
                  </span>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="font-display text-white text-6xl tracking-wide leading-none">
                      $0
                    </span>
                    <span className="font-data text-zinc-600 text-xs tracking-[0.1em] mb-2">
                      / forever
                    </span>
                  </div>
                  <p className="font-data text-zinc-600 text-[11px] tracking-[0.08em] mt-2">
                    No credit card required.
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {[
                    "Browse all public incidents",
                    "Interactive map view",
                    "Upload up to 5 clips/month",
                    "720p video quality",
                    "Basic search",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckIcon />
                      <span className="font-data text-zinc-400 text-xs tracking-[0.06em]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/login"
                  className="block text-center border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-data text-[11px] tracking-[0.18em] uppercase py-3.5 rounded transition-all duration-150"
                >
                  Get Started Free
                </Link>
              </div>

              {/* Premium card */}
              <div className="relative flex flex-col p-8 rounded-xl border border-amber-500/30 bg-zinc-900/40"
                style={{
                  boxShadow: "0 0 40px rgba(245,158,11,0.07), inset 0 0 40px rgba(245,158,11,0.03)",
                }}
              >
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 font-data text-[9px] tracking-[0.2em] uppercase bg-amber-500 text-zinc-950 px-3 py-1 rounded-full font-semibold">
                    <span className="rec-dot w-1 h-1 rounded-full bg-zinc-950 inline-block" />
                    Recommended
                  </span>
                </div>

                <div className="mb-6">
                  <span className="font-data text-amber-400/80 text-[10px] tracking-[0.25em] uppercase">
                    Premium
                  </span>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="font-display text-white text-6xl tracking-wide leading-none">
                      ${monthlyEquiv.toFixed(2)}
                    </span>
                    <span className="font-data text-zinc-500 text-xs tracking-[0.1em] mb-2">
                      / mo
                    </span>
                  </div>
                  <p className="font-data text-zinc-500 text-[11px] tracking-[0.08em] mt-2">
                    {billing === "yearly"
                      ? `Billed $${YEARLY_PRICE}/yr — you save $${(
                          MONTHLY_PRICE * 12 - YEARLY_PRICE
                        ).toFixed(2)}`
                      : `Billed $${MONTHLY_PRICE}/mo — switch to yearly to save`}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {[
                    "Everything in Free",
                    "Unlimited clip uploads",
                    "Up to 4K video quality",
                    "Advanced search & filters",
                    "Download footage for claims",
                    "Incident alerts by location",
                    "Priority map pins",
                    "Ad-free experience",
                    "Priority support",
                    "Early feature access",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckIcon />
                      <span className="font-data text-zinc-300 text-xs tracking-[0.06em]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/login"
                  className="block text-center bg-amber-500 hover:bg-amber-400 text-zinc-950 font-data text-[11px] tracking-[0.18em] uppercase font-semibold py-3.5 rounded transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20"
                >
                  Upgrade to Premium
                </Link>
              </div>
            </div>

            {/* Money-back note */}
            <p className="font-data text-zinc-600 text-[10px] tracking-[0.1em] text-center mt-8">
              30-day money-back guarantee · Cancel anytime · No hidden fees
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="border-t border-zinc-800/60">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 py-16 md:py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="font-data text-amber-400/70 text-[10px] tracking-[0.3em] uppercase mb-4">
              Join the community
            </p>
            <h2
              className="font-display text-white leading-none tracking-wide mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              EVERY STREET.
              <br />
              <span className="text-amber-400">EVERY INCIDENT.</span>
              <br />
              DOCUMENTED.
            </h2>
            <p className="font-data text-zinc-500 text-xs tracking-[0.1em] leading-relaxed mb-8 max-w-md mx-auto">
              StreetLens Premium gives you the tools to make a real impact on
              road safety in your city. Start your first month free.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-data text-[11px] tracking-[0.18em] uppercase font-semibold px-8 py-4 rounded transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-px"
              >
                Start Free Trial
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M4.5 7.5H10.293L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5a.5.5 0 010-1z" />
                </svg>
              </Link>
              <Link
                href="/explore"
                className="inline-flex items-center gap-2 border border-white/15 text-white/60 hover:border-white/40 hover:text-white font-data text-[11px] tracking-[0.18em] uppercase px-8 py-4 rounded transition-all duration-200"
              >
                Explore Free First
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
