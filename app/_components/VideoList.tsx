import Image from "next/image";

const VideoList = ({ itemData }) => {
  console.log(itemData);
  const dateStr = new Date(itemData.date * 1000).toLocaleString();
  const uploadStr = new Date(itemData.submitted_at * 1000).toLocaleDateString();
  return (
    <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
      <img
        className="object-cover w-8 h-8 rounded-full"
        src="https://icons.veryicon.com/png/o/education-technology/road-supervision-construction-platform-icon/traffic-accident.png"
        alt=""
      />

      <div className="text-left rtl:text-right">
        <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">
          {itemData?.streets[0]} & {itemData?.streets[1]}
        </h1>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          Date: {dateStr}
        </p>
      </div>
    </button>
  );
};
export default VideoList;
