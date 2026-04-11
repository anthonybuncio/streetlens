"use server";

import clientPromise from "@/lib/mongodb";

export interface Video {
  _id: string;
  streets: string[];
  vehicles: string[];
  date: number;
  zip_code: string;
  coords: { lat: number; lng: number };
  submitted_at: number;
  posted_id: string;
  video_url: string;
}

export const getVideos = async (): Promise<{ videoCollection: Video[] }> => {
  const client = await clientPromise;
  const db = client.db("videos");

  const docs = await db
    .collection("houston")
    .find({})
    .sort({ metacritic: -1 })
    .limit(10)
    .toArray();

  // Convert MongoDB documents to plain serializable objects.
  // ObjectId has a toJSON method which Next.js cannot pass across the
  // server→client boundary — stringify _id and spread the rest.
  const videoCollection: Video[] = docs.map((doc) => ({
    _id: doc._id.toString(),
    streets: doc.streets,
    vehicles: doc.vehicles,
    date: doc.date,
    zip_code: doc.zip_code,
    coords: doc.coords,
    submitted_at: doc.submitted_at,
    posted_id: doc.posted_id,
    video_url: doc.video_url,
  }));

  return { videoCollection };
};
