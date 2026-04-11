import Map from "@/app/_components/Map";
import Sidebar from "../_components/Sidebar";
import { getVideos } from "./actions";

const Explore = async () => {
  const { videoCollection } = await getVideos();

  return (
    <div className="flex overflow-hidden h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]">
      <Sidebar list={videoCollection} />
      <Map list={videoCollection} />
    </div>
  );
};

export default Explore;
