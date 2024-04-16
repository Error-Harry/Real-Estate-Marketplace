import express from "express";
import mongooese from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();

mongooese
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000 !!!");
});

app.use("/api/user", userRouter);