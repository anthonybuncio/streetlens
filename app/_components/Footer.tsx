import Link from "next/link";

const date = new Date().getFullYear();

const LINKS_LEFT = [
  { href: "/explore", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/", label: "Premium" },
];

const LINKS_RIGHT = [
  { href: "/upload", label: "Upload" },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer
      className="bg-zinc-950 border-t border-amber-500/15"
      style={{
        backgroundImage: `
          linear-gradient(rgba(245,158,11,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(245,158,11,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "56px 56px",
      }}
    >
      {/* Main footer body */}
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand column */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex flex-col leading-none gap-1">
              <span className="font-display text-white text-3xl tracking-wider">
                STREETLENS
              </span>
              <div className="flex items-center gap-1.5">
                <span className="rec-dot w-1.5 h-1.5 rounded-full bg-red-500 inline-block shrink-0" />
                <span className="font-data text-red-400/70 text-[9px] tracking-[0.22em] uppercase">
                  Live Database
                </span>
              </div>
            </div>
            <p className="font-data text-zinc-500 text-xs leading-relaxed tracking-wide max-w-xs">
              Community-sourced dashcam footage for Houston, TX. Public, free,
              and always open.
            </p>
            <p className="font-data text-zinc-600 text-[10px] tracking-[0.15em]">
              29.7604°&nbsp;N &nbsp;95.3698°&nbsp;W
            </p>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3">
              <span className="font-data text-amber-400/70 text-[9px] tracking-[0.3em] uppercase mb-1">
                Platform
              </span>
              {LINKS_LEFT.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="font-data text-xs tracking-[0.12em] uppercase text-zinc-400 hover:text-white transition-colors duration-150"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-data text-amber-400/70 text-[9px] tracking-[0.3em] uppercase mb-1">
                Resources
              </span>
              {LINKS_RIGHT.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="font-data text-xs tracking-[0.12em] uppercase text-zinc-400 hover:text-white transition-colors duration-150"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-data text-amber-400/70 text-[9px] tracking-[0.3em] uppercase mb-1">
                Legal
              </span>
              {[
                { href: "/terms-of-service", label: "Terms" },
                { href: "/privacy-policy", label: "Privacy" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="font-data text-xs tracking-[0.12em] uppercase text-zinc-400 hover:text-white transition-colors duration-150"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-zinc-800/60">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-data text-zinc-600 text-[10px] tracking-[0.15em] uppercase">
            &copy; {date} Apptelligence Labs. All rights reserved.
          </p>
          <p className="font-data text-zinc-700 text-[10px] tracking-[0.12em] uppercase">
            Built for safer streets.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
