import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
	const client = await clientPromise;
	const db = client.db("videos");

	const videoCollection = await db
		.collection("houston")
		.find({})
		.sort({ metacritic: -1 })
		.limit(10)
		.toArray();

	// res.json(videoCollection);
	return NextResponse.json({ videoCollection });
}