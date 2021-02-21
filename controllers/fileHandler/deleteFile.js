import pathTo from "path";
import fs from "fs";
import { codeService } from "../../services/code.service.js";

const deleteFile = async (req, res) => {
  const decoded = req.body.link.split("/")[5];
  const { path } = codeService()
    .getStorage()
    .find((x) => x.code === decoded);

  if (path) {
    const filePath = pathTo.join(`${path}`);

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Deleted " + filePath);
      }
    });
  } else {
    res.status(404).send("Not found");
  }
};

export { deleteFile };
