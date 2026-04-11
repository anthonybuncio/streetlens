import type { Video } from "@/app/explore/actions";

const VideoList = ({
  itemData,
  index,
}: {
  itemData: Video;
  index: number;
}) => {
  const dateStr = new Date(itemData.date * 1000).toLocaleString([], {
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  });

  const streetA = itemData?.streets?.[0] ?? "Unknown St";
  const streetB = itemData?.streets?.[1];
  const vehicleCount = itemData?.vehicles?.length ?? 0;

  return (
    <a
      href={itemData.video_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative flex gap-3 px-3 py-3.5 rounded border border-transparent hover:border-amber-500/20 hover:bg-zinc-900/70 transition-all duration-150">
        {/* Amber left accent — visible on hover */}
        <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-amber-500 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-150" />

        {/* Index number */}
        <div className="shrink-0 w-6 pt-0.5">
          <span className="font-data text-amber-500/40 text-[10px] leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Type label */}
          <div className="flex items-center gap-1.5 mb-1">
            <span className="rec-dot w-1 h-1 rounded-full bg-amber-500 inline-block shrink-0" />
            <span className="font-data text-amber-500/70 text-[9px] tracking-[0.2em] uppercase">
              Incident
            </span>
          </div>

          {/* Intersection */}
          <p className="font-data text-zinc-200 text-[11px] tracking-[0.05em] uppercase leading-snug truncate group-hover:text-white transition-colors duration-150">
            {streetA}
            {streetB ? (
              <>
                <span className="text-zinc-600 mx-1">&</span>
                {streetB}
              </>
            ) : null}
          </p>

          {/* Meta row */}
          <div className="flex items-center justify-between mt-1.5 gap-2">
            <span className="font-data text-zinc-600 text-[10px] tracking-[0.08em]">
              {vehicleCount > 0
                ? `${vehicleCount} vehicle${vehicleCount !== 1 ? "s" : ""}`
                : "vehicle data unavailable"}
            </span>
            <span className="font-data text-zinc-600 text-[10px] tracking-[0.08em] shrink-0">
              {dateStr}
            </span>
          </div>
        </div>

        {/* External link icon */}
        <div className="shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-3 h-3 text-amber-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13L13 3M13 3H8M13 3v5"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};
export default VideoList;
