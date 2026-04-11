const FAQ_DATA = [
  {
    question: "What is StreetLens?",
    answer:
      "StreetLens is a community-powered platform where dashcam owners upload and share their footage publicly. Anyone can search and browse clips by location — no account required to view.",
  },
  {
    question: "How does the platform work?",
    answer:
      "Create a free account, connect your dashcam footage, and upload clips directly through our web interface. Videos are geo-tagged and appear on our interactive map so others can browse by location.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. All uploads are stored securely in the cloud with encryption in transit and at rest. You control what you share — only the clips you explicitly upload become publicly visible.",
  },
  {
    question: "What dashcam brands are compatible?",
    answer:
      "StreetLens accepts standard video formats (MP4, MOV, AVI) from any dashcam brand. As long as your camera outputs a common video file, you can upload it to our platform.",
  },
  {
    question: "Can I share footage with insurance companies or law enforcement?",
    answer:
      "Yes. Any public clip on StreetLens can be linked and shared with authorized parties. You can also keep clips unlisted and share a private link only with those who need access.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "A mobile app is on our roadmap. For now, the web platform is fully responsive and works great on any device — phone, tablet, or desktop.",
  },
  {
    question: "What are the benefits of using StreetLens?",
    answer:
      "Easy access to street-level footage for your neighborhood, a reliable cloud backup for your own clips, the ability to share evidence quickly, and the peace of mind of a community watching out for each other.",
  },
  {
    question: "Is StreetLens free?",
    answer:
      "Completely free. Browsing, searching, and uploading are all free. We plan to offer optional premium tiers for power users in the future, but the core platform will always be free.",
  },
  {
    question: "How do I get started?",
    answer:
      "Create a free account, verify your email, and start uploading. The setup takes under two minutes and you can have your first clip live on the map immediately.",
  },
  {
    question: "How do I reach support?",
    answer:
      "Visit our Contact page or email support directly. Our team typically responds within one business day. For urgent safety-related matters, please include 'URGENT' in your subject line.",
  },
];

export default function Faq() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">

      {/* ── Page header ──────────────────────────────────────── */}
      <section
        className="scanlines relative border-b border-zinc-800/60 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      >
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border border-amber-500/25 rounded bg-amber-500/[0.07]">
            <span className="rec-dot w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shrink-0" />
            <span className="font-data text-amber-400/90 text-[10px] tracking-[0.28em] uppercase">
              Need Help?
            </span>
          </div>
          <h1
            className="font-display text-white leading-none tracking-wide"
            style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
          >
            FREQUENTLY
            <br />
            <span className="text-amber-400">ASKED.</span>
          </h1>
          <p className="font-data text-zinc-500 text-sm tracking-[0.1em] mt-4 max-w-md">
            Everything you need to know about StreetLens — answered.
          </p>
        </div>
      </section>

      {/* ── Accordion ────────────────────────────────────────── */}
      <section className="max-w-screen-lg mx-auto px-6 sm:px-10 py-16 md:py-24">
        <div className="flex flex-col gap-2">
          {FAQ_DATA.map((item, i) => (
            <details
              key={i}
              className="group border border-zinc-800/60 rounded-lg bg-zinc-900/30 hover:bg-zinc-900/60 open:bg-zinc-900/60 open:border-amber-500/25 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden"
              open={i === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5">
                <span className="font-data text-xs sm:text-[13px] tracking-[0.12em] uppercase text-zinc-200 group-open:text-white transition-colors duration-150 leading-relaxed">
                  <span className="font-data text-amber-500/50 mr-3 text-[10px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.question}
                </span>
                <span className="shrink-0 w-5 h-5 rounded border border-zinc-700 group-open:border-amber-500/50 flex items-center justify-center transition-colors duration-200">
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="w-3 h-3 text-zinc-500 group-open:text-amber-400 transition-colors duration-150"
                  >
                    <path
                      strokeLinecap="round"
                      d="M6 2v8M2 6h8"
                      className="group-open:opacity-0 transition-opacity duration-150"
                    />
                    <path
                      strokeLinecap="round"
                      d="M2 6h8"
                      className="opacity-0 group-open:opacity-100 transition-opacity duration-150"
                    />
                  </svg>
                </span>
              </summary>

              <div className="px-6 pb-6 pt-1 border-t border-zinc-800/40">
                <p className="text-zinc-400 leading-relaxed text-sm pl-8">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 p-8 rounded-xl border border-zinc-800/60 bg-zinc-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-white text-2xl tracking-wider">
              STILL HAVE QUESTIONS?
            </p>
            <p className="font-data text-zinc-500 text-xs tracking-[0.12em] mt-1 uppercase">
              Our team is ready to help.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-data text-[11px] tracking-[0.18em] uppercase font-semibold px-6 py-3 rounded transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20"
          >
            Contact Us
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M4.5 7.5H10.293L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5a.5.5 0 010-1z" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
