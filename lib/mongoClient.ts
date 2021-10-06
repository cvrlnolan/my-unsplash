import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://" +
  process.env.MONGODB_USERNAME +
  ":" +
  process.env.MONGODB_PASSWORD +
  "@" +
  process.env.MONGODB_CLUSTER_URL +
  "/" +
  process.env.MONGODB_DATABASE +
  "?retryWrites=true&w=majority";

const client: MongoClient = new MongoClient(uri);

export { client };
