import pathTo from "path";
import fs from "fs";
import { codeService } from "../../services/code.service.js";

const deleteFile = async (req, res) => {
  const code = req.body.link.split("/")[5];
  const { path } = codeService()
    .getStorage()
    .find((x) => x.code === code);

  if (path) {
    const filePath = pathTo.join(`${path}`);

    fs.unlink(filePath, (err) => {
      if (err) {
        res.send({ msg: err });
      } else {
        res.send({ msg: "Deleted " + filePath });
      }
    });
  } else {
    res.status(404).send("Not found");
  }
};

export { deleteFile };
