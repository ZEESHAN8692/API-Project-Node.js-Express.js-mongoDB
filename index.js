import express from "express";
import dotenv from "dotenv";
import { database } from "./config/database.js";
import User from "./model/userApi.model.js";
import router from "./routes/routes.js";

// dotenv
dotenv.config();
const app = express();

//server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Successfull Connected Port http://localhost:${PORT}/`);
});

// middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", router);

// database
database();
