import Map from "@/app/_components/Map";
import Sidebar from "../_components/Sidebar";
import { getVideos } from "./actions";

const Explore = async () => {
  const { videoCollection } = await getVideos();

  return (
    <div className="min-h-screen flex">
      <Sidebar list={videoCollection} />
      <Map list={videoCollection} />
    </div>
  );
};

export default Explore;
