import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/autoGoGo");

try {
     await mongoClient.connect();
     console.log(" MongoDB database is connected")

} catch (error) {
     console.log(error.message)
}

export const db = mongoClient.db();