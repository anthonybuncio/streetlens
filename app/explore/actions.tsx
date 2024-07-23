"use server";

import clientPromise from "@/lib/mongodb";

export const getVideos = async () => {
  const client = await clientPromise;
  const db = client.db("videos");

  const videoCollection = await db
    .collection("houston")
    .find({})
    .sort({ metacritic: -1 })
    .limit(10)
    .toArray();

  // res.json(videoCollection);
  return { videoCollection };
};
