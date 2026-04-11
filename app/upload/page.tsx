"use client";

import Image from "next/image";

export default function Upload() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const getEpochDate =
      new Date(
        `${event.target.date.value}, ${event.target.time.value}`
      ).getTime() / 1000.0;
    const streetData = [
      event.target.street_1.value,
      event.target.street_2.value,
    ];
    const vehicleData = event.target.vehicles.value.split(",");

    try {
      let response = await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({
          date: getEpochDate,
          video_url: event.target.video_url.value,
          streets: streetData,
          vehicles: vehicleData,
          submitted_at: Math.floor(new Date().getTime() / 1000.0),
        }),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      console.log(response);
    } catch (errorMessage: any) {
      console.log(errorMessage);
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">

      {/* ── Form side ────────────────────────────────────────── */}
      <div className="flex-1 md:w-1/2 overflow-y-auto">
        <div
          className="scanlines min-h-full px-8 sm:px-12 lg:px-16 py-12 lg:py-16"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245,158,11,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245,158,11,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        >
          {/* Page header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border border-amber-500/25 rounded bg-amber-500/[0.07]">
              <span className="rec-dot w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shrink-0" />
              <span className="font-data text-amber-400/90 text-[10px] tracking-[0.28em] uppercase">
                Community Report
              </span>
            </div>
            <h1
              className="font-display text-white leading-none tracking-wide"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              SUBMIT YOUR
              <br />
              <span className="text-amber-400">FOOTAGE.</span>
            </h1>
            <p className="font-data text-zinc-500 text-xs tracking-[0.1em] mt-3 max-w-sm">
              Help the community by reporting an incident. All fields are
              required to place your clip on the map.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-lg">

            {/* Section 01 — When */}
            <fieldset className="flex flex-col gap-3">
              <legend className="flex items-center gap-2 mb-1 w-full">
                <span className="font-data text-amber-500/60 text-[10px] tracking-[0.2em]">01</span>
                <span className="font-data text-amber-400/80 text-[10px] tracking-[0.2em] uppercase">
                  When did it happen?
                </span>
                <div className="flex-1 h-px bg-zinc-800 ml-1" />
              </legend>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="date" className="font-data text-zinc-500 text-[10px] tracking-[0.15em] uppercase">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="w-full rounded bg-zinc-900/70 border border-zinc-800 text-zinc-200 font-data text-sm py-2.5 px-3 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150 [color-scheme:dark]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="time" className="font-data text-zinc-500 text-[10px] tracking-[0.15em] uppercase">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    className="w-full rounded bg-zinc-900/70 border border-zinc-800 text-zinc-200 font-data text-sm py-2.5 px-3 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150 [color-scheme:dark]"
                  />
                </div>
              </div>
            </fieldset>

            {/* Section 02 — Where */}
            <fieldset className="flex flex-col gap-3">
              <legend className="flex items-center gap-2 mb-1 w-full">
                <span className="font-data text-amber-500/60 text-[10px] tracking-[0.2em]">02</span>
                <span className="font-data text-amber-400/80 text-[10px] tracking-[0.2em] uppercase">
                  Where did it happen?
                </span>
                <div className="flex-1 h-px bg-zinc-800 ml-1" />
              </legend>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="street_1" className="font-data text-zinc-500 text-[10px] tracking-[0.15em] uppercase">
                    Street / Road #1
                  </label>
                  <input
                    type="text"
                    id="street_1"
                    name="street_1"
                    placeholder="e.g. Westheimer Rd"
                    required
                    className="w-full rounded bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-data text-sm py-2.5 px-3 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="street_2" className="font-data text-zinc-500 text-[10px] tracking-[0.15em] uppercase">
                    Cross Street / Road #2
                  </label>
                  <input
                    type="text"
                    id="street_2"
                    name="street_2"
                    placeholder="e.g. Kirby Dr"
                    className="w-full rounded bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-data text-sm py-2.5 px-3 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150"
                  />
                </div>
              </div>
            </fieldset>

            {/* Section 03 — Footage */}
            <fieldset className="flex flex-col gap-3">
              <legend className="flex items-center gap-2 mb-1 w-full">
                <span className="font-data text-amber-500/60 text-[10px] tracking-[0.2em]">03</span>
                <span className="font-data text-amber-400/80 text-[10px] tracking-[0.2em] uppercase">
                  Link to footage
                </span>
                <div className="flex-1 h-px bg-zinc-800 ml-1" />
              </legend>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="video_url" className="font-data text-zinc-500 text-[10px] tracking-[0.15em] uppercase">
                  Video URL
                </label>
                <input
                  type="url"
                  id="video_url"
                  name="video_url"
                  placeholder="Google Drive, YouTube, or direct link"
                  required
                  className="w-full rounded bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-data text-sm py-2.5 px-3 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150"
                />
                <p className="font-data text-zinc-600 text-[10px] tracking-[0.08em]">
                  Make sure the link is publicly accessible before submitting.
                </p>
              </div>
            </fieldset>

            {/* Section 04 — Vehicles */}
            <fieldset className="flex flex-col gap-3">
              <legend className="flex items-center gap-2 mb-1 w-full">
                <span className="font-data text-amber-500/60 text-[10px] tracking-[0.2em]">04</span>
                <span className="font-data text-amber-400/80 text-[10px] tracking-[0.2em] uppercase">
                  Vehicles involved
                </span>
                <div className="flex-1 h-px bg-zinc-800 ml-1" />
              </legend>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="vehicles" className="font-data text-zinc-500 text-[10px] tracking-[0.15em] uppercase">
                  Vehicle descriptions
                </label>
                <input
                  type="text"
                  id="vehicles"
                  name="vehicles"
                  placeholder="Red Honda CRV, White Tesla Model 3"
                  className="w-full rounded bg-zinc-900/70 border border-zinc-800 text-zinc-200 placeholder-zinc-600 font-data text-sm py-2.5 px-3 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-colors duration-150"
                />
                <p className="font-data text-zinc-600 text-[10px] tracking-[0.08em]">
                  Separate multiple vehicles with a comma.
                </p>
              </div>
            </fieldset>

            {/* Submit */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-data text-[11px] tracking-[0.2em] uppercase font-semibold py-4 rounded transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-px mt-2"
            >
              Submit Report
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M4.5 7.5H10.293L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 11-.708-.708L10.293 8.5H4.5a.5.5 0 010-1z" />
              </svg>
            </button>
          </form>

          {/* Bottom note */}
          <p className="font-data text-zinc-700 text-[10px] tracking-[0.1em] mt-8 max-w-lg">
            By submitting, you confirm this footage is from your own dashcam
            and consent to it being publicly visible on StreetLens.
          </p>
        </div>
      </div>

      {/* ── Image side ───────────────────────────────────────── */}
      <div className="hidden md:block relative w-1/2 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1597328290883-50c5787b7c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="Dashcam footage at night"
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        {/* Atmospheric corner text */}
        <div className="absolute bottom-10 left-10 right-10">
          <div className="inline-flex items-center gap-2 mb-3 px-2.5 py-1 border border-white/10 rounded bg-black/30 backdrop-blur-sm">
            <span className="rec-dot w-1.5 h-1.5 rounded-full bg-amber-400 inline-block shrink-0" />
            <span className="font-data text-white/60 text-[9px] tracking-[0.25em] uppercase">
              Community Footage · Houston, TX
            </span>
          </div>
          <p className="font-display text-white/80 text-4xl xl:text-5xl leading-none tracking-wide">
            EVERY CLIP
            <br />
            <span className="text-amber-400/80">COUNTS.</span>
          </p>
          <p className="font-data text-white/40 text-[11px] tracking-[0.1em] mt-3 max-w-xs">
            Your dashcam footage helps keep streets safer for everyone in the
            community.
          </p>
        </div>
      </div>
    </div>
  );
}
