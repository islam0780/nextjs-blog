import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib1/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { db } = await connectToDatabase();

  const data = await db.collection("data").find().toArray();

  res.status(200).json({ data });
}