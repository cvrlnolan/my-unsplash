import { client } from "@/lib/mongoClient";
import { ObjectId } from "bson";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.body;
  try {
    if (id !== undefined) {
      await client.connect();
      await client
        .db(process.env.MONGODB_DATABASE)
        .collection("photos")
        .deleteOne({ _id: new ObjectId(id.trim()) });
    //   console.log("Deleted.");
      res.status(200).json({ message: "Deleted." });
    } else {
      res.status(200).end();
    }
  } catch (e: any) {
    console.log(e.message);
    res.status(400).end();
  } finally {
    await client.close();
  }
}
