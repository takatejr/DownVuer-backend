import pathTo from "path";
import { codeService } from "../../../Node/services/code.service.js";

const sendFile = async (req, res) => {
  const { path } = codeService()
    .getStorage()
    .find((x) => x.code === req.params.id);

  if (path) {
    const filePath = pathTo.join(`${path}`);

    res.download(filePath, (err) => {
      console.error(err);
    });
  } else {
    res.status(401).send("Unauthorize connection");
  }
};

export { sendFile };
