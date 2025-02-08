import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`<h1>DooIt</h1>`);
});

try {
  app.listen(PORT, () => {
    console.log("listening on port " + PORT);
  });
} catch (error) {
  console.error(error);
}
