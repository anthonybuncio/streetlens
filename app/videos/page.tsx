import Map from "@/app/_components/Map";

async function getVideos() {
  const res = await fetch(`http://localhost:3000/api/data`);
  return res.json();
}

const Videos = async () => {
  const videosData = await getVideos();

  console.log(videosData);
  return (
    <>
      <div className="mt-16 py-12 bg-gray-100 min-h-screen">
        {/* <h1>Map cannot be loaded right now, sorry.</h1> */}
        <Map />
      </div>
    </>
  );
};
export default Videos;
