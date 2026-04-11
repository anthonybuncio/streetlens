"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Map from "./Map";
import type { Video } from "@/app/explore/actions";

export default function ExploreLayout({ list }: { list: Video[] }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative flex overflow-hidden h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]">

      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/70 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — hidden off-screen on mobile, slide in when open */}
      <div
        className={`
          fixed md:relative inset-y-0 left-0 z-30
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <Sidebar list={list} onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Map — always full-width on mobile */}
      <div className="flex-1 h-full relative">
        <Map list={list} />

        {/* Mobile toggle button */}
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-zinc-950/95 border border-amber-500/40 text-amber-400 font-data text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-full shadow-xl backdrop-blur-sm"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-3.5 h-3.5 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          Incidents · {list.length} active
        </button>
      </div>
    </div>
  );
}
