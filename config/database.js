import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export function database() {
  try {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log("Databse Connected");
      })
      .catch((err) => console.log("MongoDB connection error:", err));
  } catch (error) {
    console.log(`Error : ${error}`);
  }
}
