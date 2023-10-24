import Map from "@/app/_components/Map";

async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/data`);
  return res.json();
}

const Videos = async () => {
  const { videoCollection } = await getServerSideProps();

  console.log(videoCollection);
  return (
    <>
      <div className="mt-16 py-12 bg-gray-100 min-h-screen">
        {/* <h1>Map cannot be loaded right now, sorry.</h1> */}
        <Map list={videoCollection} />
      </div>
    </>
  );
};
export default Videos;
