import { client } from "@/lib/mongoClient";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    await client.connect();
    const photos = await client
      .db(process.env.MONGODB_DATABASE)
      .collection("photos")
      .find({}, { sort: { createdDate: -1 } })
      .toArray();
    // console.log(photos);
    res.status(200).json(photos);
  } catch (e: any) {
    console.log(e.message);
    res.status(400).end();
  } finally {
    await client.close();
  }
}
