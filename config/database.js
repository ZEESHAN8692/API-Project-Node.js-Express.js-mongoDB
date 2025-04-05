import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function database() {
  await mongoose.connect(dotenv.env.MONGO_URL);
}
