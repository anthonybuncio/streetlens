import type { Video } from "@/app/explore/actions";
import Search from "./Search";
import VideoList from "./VideoList";

const Sidebar = ({ list }: { list: Video[] }) => {
  return (
    <aside className="flex flex-col w-64 lg:w-72 shrink-0 h-full bg-zinc-950 border-r border-zinc-800/60 overflow-hidden">

      {/* Header */}
      <div
        className="shrink-0 px-4 py-4 border-b border-zinc-800/60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      >
        {/* Title + count */}
        <div className="flex items-center justify-between mb-1">
          <span className="font-display text-white text-xl tracking-wider leading-none">
            INCIDENT FEED
          </span>
          <span className="font-data text-[9px] tracking-[0.18em] uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
            {list.length} active
          </span>
        </div>

        {/* Location tag */}
        <div className="flex items-center gap-1.5 mb-3">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-2.5 h-2.5 text-zinc-600 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 1.5C5.79 1.5 4 3.29 4 5.5c0 3.25 4 9 4 9s4-5.75 4-9c0-2.21-1.79-4-4-4z"
            />
            <circle cx="8" cy="5.5" r="1.25" fill="currentColor" strokeWidth={0} className="text-zinc-600" />
          </svg>
          <span className="font-data text-zinc-600 text-[9px] tracking-[0.15em] uppercase">
            Houston, TX · 29.76°N 95.38°W
          </span>
        </div>

        {/* Search */}
        <Search />
      </div>

      {/* Incident list */}
      <div className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
        {list.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-32 gap-2 text-center px-4">
            <span className="font-data text-zinc-600 text-[10px] tracking-[0.15em] uppercase">
              No incidents found
            </span>
          </div>
        ) : (
          list.map((item, i) => (
            <VideoList key={item._id} itemData={item} index={i} />
          ))
        )}
      </div>

      {/* Footer strip */}
      <div className="shrink-0 border-t border-zinc-800/60 px-4 py-2.5 flex items-center justify-between">
        <span className="font-data text-zinc-700 text-[9px] tracking-[0.15em] uppercase">
          Last updated
        </span>
        <span className="font-data text-zinc-600 text-[9px] tracking-[0.1em]">
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    </aside>
  );
};
export default Sidebar;
