"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { DriverPovIcon } from "./svg/Icons";

const NAV_LINKS = [
  { href: "/explore", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/", label: "Premium" },
  { href: "/upload", label: "Upload" },
  { href: "/faq", label: "FAQ" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-zinc-950 border-b border-amber-500/20 z-50">
      <div className="px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <DriverPovIcon className="h-8 sm:h-10 text-amber-400 transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col leading-none gap-0.5">
              <span className="font-display text-white text-2xl md:text-3xl tracking-wider leading-none">
                STREETLENS
              </span>
              <div className="flex items-center gap-1.5">
                <span className="rec-dot w-1.5 h-1.5 rounded-full bg-red-500 inline-block shrink-0" />
                <span className="font-data text-red-400/80 text-[9px] tracking-[0.22em] uppercase leading-none">
                  Live Feed
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-9">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="nav-sweep font-data text-[11px] tracking-[0.18em] uppercase text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden md:block font-data text-[11px] tracking-[0.18em] uppercase border border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-200 px-5 py-2 rounded"
              onClick={() => signIn()}
            >
              Login
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden text-zinc-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              ) : (
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-zinc-950 border-t border-zinc-800/60 ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-2 flex flex-col">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="font-data text-[11px] tracking-[0.18em] uppercase text-zinc-400 hover:text-white py-3.5 border-b border-zinc-800/40 last:border-0 transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="font-data text-[11px] tracking-[0.18em] uppercase text-amber-400 hover:text-amber-300 py-4 transition-colors duration-150"
          >
            → Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
