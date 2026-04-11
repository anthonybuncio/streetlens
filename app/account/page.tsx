"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";

const AccountPage = () => {
  const { data: session } = useSession();

  if (session) console.log(session);

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
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-10 py-10 md:py-14">
          <div className="flex items-center gap-4">
            {session?.user?.image && (
              <div className="relative shrink-0">
                <Image
                  alt="Profile picture"
                  src={session.user.image}
                  width={56}
                  height={56}
                  className="rounded-full object-cover ring-2 ring-amber-500/30"
                />
              </div>
            )}
            <div>
              <div className="inline-flex items-center gap-2 mb-1 px-2.5 py-1 border border-amber-500/25 rounded bg-amber-500/[0.07]">
                <span className="font-data text-amber-400/90 text-[9px] tracking-[0.28em] uppercase">
                  Account Settings
                </span>
              </div>
              <h1 className="font-display text-white text-2xl sm:text-3xl tracking-wider leading-none">
                {session?.user?.name ?? "YOUR PROFILE"}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form ────────────────────────────────────────────── */}
      <section className="max-w-2xl mx-auto px-6 sm:px-8 py-10 md:py-16">
        <form className="flex flex-col gap-0 rounded-xl border border-zinc-800/60 overflow-hidden">

          {/* Account section */}
          <div className="bg-zinc-900/30 px-6 sm:px-8 py-6 border-b border-zinc-800/60">
            <h2 className="font-data text-[10px] tracking-[0.25em] uppercase text-amber-400/70 mb-4">
              Account
            </h2>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="user-info-email" className="font-data text-zinc-500 text-[10px] tracking-[0.15em] uppercase">
                Email Address
              </label>
              <input
                type="text"
                id="user-info-email"
                className="w-full rounded bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-data text-sm py-2.5 px-3 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150"
                placeholder={session?.user?.email ?? "Email"}
              />
            </div>
          </div>

          {/* Personal info section */}
          <div className="bg-zinc-900/20 px-6 sm:px-8 py-6 border-b border-zinc-800/60">
            <h2 className="font-data text-[10px] tracking-[0.25em] uppercase text-amber-400/70 mb-4">
              Personal Info
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="user-info-name" className="font-data text-zinc-500 text-[10px] tracking-[0.15em] uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  id="user-info-name"
                  placeholder="Name"
                  className="w-full rounded bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-data text-sm py-2.5 px-3 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="user-info-phone" className="font-data text-zinc-500 text-[10px] tracking-[0.15em] uppercase">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="user-info-phone"
                  placeholder="Phone number"
                  className="w-full rounded bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-data text-sm py-2.5 px-3 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150"
                />
              </div>
            </div>
          </div>

          {/* Password section */}
          <div className="bg-zinc-900/30 px-6 sm:px-8 py-6 border-b border-zinc-800/60">
            <h2 className="font-data text-[10px] tracking-[0.25em] uppercase text-amber-400/70 mb-4">
              Change Password
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="password"
                id="user-info-password"
                placeholder="New password"
                className="flex-1 rounded bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-data text-sm py-2.5 px-3 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150"
              />
              <button
                type="button"
                className="shrink-0 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-data text-[11px] tracking-[0.18em] uppercase py-2.5 px-5 rounded transition-all duration-150"
              >
                Update
              </button>
            </div>
          </div>

          {/* Save */}
          <div className="bg-zinc-900/20 px-6 sm:px-8 py-5 flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-data text-[11px] tracking-[0.2em] uppercase font-semibold px-6 py-2.5 rounded transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20"
            >
              Save Changes
            </button>
          </div>

        </form>
      </section>
    </div>
  );
};
export default AccountPage;
