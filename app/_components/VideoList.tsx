const VideoList = ({ itemData }) => {
  // const dateStr = new Date(itemData.date * 1000).toLocaleString();
  // const uploadStr = new Date(itemData.submitted_at * 1000).toLocaleDateString();
  const dateStr = new Date(itemData.date * 1000).toLocaleTimeString([], {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <a href={itemData.video_url} target="_blank" rel="noopener noreferrer">
      <button className="flex items-stretch w-full px-2 rounded-sm transition-colors duration-200 gap-x-2 hover:bg-zinc-800 focus:outline-none">
        <div className="flex items-center justify-start w-full ">
          <svg
            fill="#ffffff"
            className="object-cover w-8 h-8 m-2 rounded-full"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 488.074 488.074"
            xmlSpace="preserve"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g transform="translate(0 -540.36)">
                <g>
                  <g>
                    <path d="M365.774,863.067c-22.1,0-40.1,18.3-40.1,40.8c0,23.3,17.6,41.6,40.1,41.6s40.9-18.7,40.9-41.6 C406.674,881.367,388.374,863.067,365.774,863.067z M365.774,925.467c-11.3,0-20.1-9.5-20.1-21.6c0-11.5,9-20.8,20.1-20.8 c11.3,0,20.9,9.5,20.9,20.8C386.674,915.767,377.274,925.467,365.774,925.467z"></path>
                    <path d="M477.274,904.667h-50.5c-5.5,0-10,4.5-10,10s4.5,10,10,10h50.5c5.5,0,10-4.5,10-10S482.774,904.667,477.274,904.667z"></path>
                    <path d="M478.074,738.167L478.074,738.167c-0.1,0-0.2,0-0.3,0c-2.2-0.1-4.4,0.5-6.3,1.9l-99.2,71.5c-0.4,0.2-0.8,0.4-1.2,0.6 l-99.2,20.3c-3.8,0.8-6.8,3.7-7.7,7.5l-9.8,41.6c-0.4,1.8-0.3,3.6,0.2,5.3l9.8,30.8c1.3,4.2,5.2,7,9.5,7h30.9c5.5,0,10-4.5,10-10 s-4.5-10-10-10h-23.7l-6.7-21.2l7.7-32.7l95.5-19.5c0.7-0.1,1.3-0.3,1.9-0.6l97.7,0.8h0.1c3,0,5.7-1.3,7.6-3.5 c2-1.8,3.2-4.4,3.2-7.4v-72.4C488.074,742.667,483.574,738.167,478.074,738.167z M468.074,811.367l-60.8-0.5l60.8-43.8V811.367z"></path>
                    <path d="M106.074,873.067c-19.4,0-35.2,16.4-35.2,36.6c0,19.7,15.8,35.8,35.2,35.8c19.9,0,36.1-16,36-35.8 C142.074,889.167,126.274,873.067,106.074,873.067z M106.074,925.467c-8.2,0-15.2-7.2-15.2-15.8c0-9.3,6.7-16.6,15.2-16.6 c9.2,0,16.1,7.1,16,16.6C122.074,918.567,115.074,925.467,106.074,925.467z"></path>
                    <path d="M49.974,904.667h-39.9c-5.5,0-10,4.5-10,10s4.5,10,10,10h39.9c5.5,0,10-4.5,10-10S55.474,904.667,49.974,904.667z"></path>
                    <path d="M216.074,863.467l-113.9-30.6l-87.9-41.3c-5-2.4-11-0.2-13.3,4.8c-2.4,5-0.2,11,4.8,13.3l88.7,41.6 c0.6,0.2,1.1,0.4,1.7,0.6l107.4,28.8v24h-42.9c-5.5,0-10,4.5-10,10s4.5,10,10,10h52.9v0c5.5,0,10-4.5,9.9-9.9v-41.6 C223.474,868.567,220.474,864.667,216.074,863.467z"></path>
                    <path d="M261.374,723.467l23.5-24.1v28.3c0,3.6,1.9,6.9,5,8.7c3.1,1.7,6.9,1.7,10-0.1l36.7-21.6l-29.9,49.4 c-2.8,4.7-1.3,10.8,3.4,13.7c4.7,2.8,10.8,1.3,13.7-3.4l50.5-83.3c2.4-3.9,1.8-8.9-1.4-12.2s-8.3-3.9-12.2-1.6l-55.7,32.8v-35 c0-4.1-2.4-7.8-6.2-9.3c-3.7-1.5-8.1-0.6-10.9,2.3l-29.7,30.3l-25.4-68.5c-1.6-4.3-5.8-6.9-10.3-6.5c-4.4,0.4-8.1,3.8-8.9,8.2 l-18,101.5l-49-25.4c-3.9-2-8.7-1.3-11.8,1.9c-3.1,3.1-3.7,7.9-1.6,11.8l40.7,73.3c1.9,3.2,5.3,5.1,8.8,5.1l0,0 c1.6,0,3.3-0.4,4.9-1.3c4.8-2.7,6.6-8.8,3.9-13.6l-24.6-44.3l31.6,16.4c2.8,1.5,6.1,1.5,9,0.1c2.8-1.4,4.8-4.1,5.4-7.2l13.9-78.7 l18.1,48.8c1.2,3.2,3.9,5.6,7.3,6.3C255.474,726.967,258.974,725.867,261.374,723.467z"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <div className="text-left rtl:text-right">
            <h1 className="text-sm font-medium text-zinc-300 capitalize">
              Accident
            </h1>

            <p className=" text-xs text-zinc-500">
              {itemData?.streets[0]} & {itemData?.streets[1]}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-end w-full ">
          <div className="flex flex-col justify-between items-end p-2">
            <p className="text-xs text-zinc-500">{dateStr}</p>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-yellow-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg> */}
          </div>
        </div>
      </button>
    </a>
  );
};
export default VideoList;
