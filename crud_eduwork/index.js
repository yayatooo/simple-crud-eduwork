import express from "express";
import router from "./app/routes/router.js";
import cors from "cors";
const app = express();
const port = 3000;
import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/users";
mongoose.connect(url).catch((error) => handleError(error));
app.use(express.json());
app.use(cors());
app.use(router);
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
