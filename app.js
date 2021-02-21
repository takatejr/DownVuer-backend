import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import { youtubeRoute } from "./routes/youtubeRoutes.js";

export const downVuer = express();

downVuer.use(cors());
downVuer.use(bodyParser.json());
downVuer.use(bodyParser.urlencoded({ extended: true }));

downVuer.use("/api/", youtubeRoute);
