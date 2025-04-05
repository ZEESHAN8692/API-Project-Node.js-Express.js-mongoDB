import express from "express";
import dotenv from "dotenv";
// import { database } from "./config/database";

// dotenv
dotenv.config();
const app = express();

//server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Successfull Connected Port http://localhost:${PORT}/`);
});

// middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home");
});
