import Map from "@/app/_components/Map";
import Sidebar from "../_components/Sidebar";

async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/data`, {
    next: { revalidate: 3600 },
  });
  return res.json();
}

const Videos = async () => {
  const { videoCollection } = await getServerSideProps();

  return (
    <>
      <div className="mt-16 min-h-screen flex">
        <Sidebar list={videoCollection} />
        <Map list={videoCollection} />
        {/* {!session || !session.user ? (
          <h1>Map cannot be loaded right now, sorry.</h1>
        ) : (
          <Map list={videoCollection} />
        )} */}
      </div>
    </>
  );
};
export default Videos;
