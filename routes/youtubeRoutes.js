import { Router } from "express";

import { playlistDownload } from "../controllers/downloadHandler/playlistDownload.js";
import { singleDownload } from "../controllers/downloadHandler/singleDownload.js";
import { partialDownload } from "../controllers/downloadHandler/partialDownload.js";

import { sendFile } from "../controllers/fileHandler/sendFile.js";
import { deleteFile } from "../controllers/fileHandler/deleteFile.js";

import { getInfo } from "../controllers/getInfo.js";

export const youtubeRoute = Router();

/* download */

youtubeRoute.post("/playlist", playlistDownload);
youtubeRoute.post("/partial", partialDownload);
youtubeRoute.post("/single", singleDownload);

/* file */

youtubeRoute.get("/file/:id", sendFile);
youtubeRoute.delete("/file/:id", deleteFile);

/* info */

youtubeRoute.post("/file/info", getInfo);
