"use client";
import { useRouter } from "next/navigation";

const VideoList = ({ itemData }) => {
  console.log(itemData);
  // const dateStr = new Date(itemData.date * 1000).toLocaleString();
  // const uploadStr = new Date(itemData.submitted_at * 1000).toLocaleDateString();
  const dateStr = new Date(itemData.date * 1000).toLocaleTimeString([], {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  });

  const router = useRouter();

  return (
    <button
      className="flex items-center justify-start w-full py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none"
      onClick={() => router.push(itemData.video_url)}
    >
      <img
        className="object-cover w-8 h-8 rounded-full"
        src="https://icons.veryicon.com/png/o/education-technology/road-supervision-construction-platform-icon/traffic-accident.png"
        alt=""
      />

      <div className="text-left rtl:text-right">
        <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
          {itemData?.streets[0]} & {itemData?.streets[1]}
        </h1>

        <p className="text-xs text-gray-500 dark:text-gray-400">{dateStr}</p>
      </div>
    </button>
  );
};
export default VideoList;
