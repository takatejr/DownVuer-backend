import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerConfig } from "./swagger.js";
import { youtubeRoute } from "./routes/youtubeRoutes.js";

export const downVuer = express();

downVuer.use(cors());
downVuer.use(bodyParser.json());
downVuer.use(bodyParser.urlencoded({ extended: true }));

downVuer.use("/api/", youtubeRoute);

downVuer.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));
