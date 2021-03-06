import { client } from "@/lib/mongoClient";
import type { NextApiRequest, NextApiResponse } from "next";

// When using mongoDB for live search a lot of disconnections

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { search } = req.body;
  try {
    await client.connect();
    const result = await client
      .db(process.env.MONGODB_DATABASE)
      .collection("photos")
      .find({ $text: { $search: search as string } })
      .toArray();
    // console.log(result);
    res.status(200).json(result);
  } catch (e: any) {
    console.log(e.message);
    res.status(400).end();
  } finally {
    await client.close();
  }
}
