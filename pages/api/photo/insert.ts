import { client } from "@/lib/mongoClient";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = req.body;
  try {
    await client.connect();
    await client
      .db(process.env.MONGODB_DATABASE)
      .collection("photos")
      .insertOne({ ...data, createdDate: new Date() });
    res.status(200).json({ message: "Ok." });
  } catch (e: any) {
    console.log(e.message);
    res.status(400).end();
  } finally {
    await client.close();
  }
}
