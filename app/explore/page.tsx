import Map from "@/app/_components/Map";
import Sidebar from "../_components/Sidebar";
import { getServerSession } from "next-auth";
import { getVideos } from "./actions";

async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/data`, {
    next: { revalidate: 3600 },
  });
  return res.json();
}

const Explore = async () => {
  const { videoCollection } = await getVideos();
  const session = await getServerSession();
  console.log(videoCollection);
  return (
    <>
      <div className="min-h-screen flex">
        <Sidebar list={videoCollection} />
        <Map list={videoCollection} />

        {/* Require session to display map */}

        {/* {!session || !session.user ? (
          <h1>Map cannot be loaded right now, sorry.</h1>
        ) : (
          <Map list={videoCollection} />
        )} */}
      </div>
    </>
  );
};
export default Explore;
