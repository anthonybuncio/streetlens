import ExploreLayout from "@/app/_components/ExploreLayout";
import { getVideos } from "./actions";

const Explore = async () => {
  const { videoCollection } = await getVideos();

  return <ExploreLayout list={videoCollection} />;
};

export default Explore;
