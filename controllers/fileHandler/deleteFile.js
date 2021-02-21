import path from "path";
import fs from "fs";

const deleteFile = async (req, res) => {
  const filePath = path.join(`/DownVuer/Vue/src/Node/${req.body.title}`);

  fs.unlink(filePath, (err) => {
    console.log("usuwam");
    if (err) {
      console.error(err);
    } else {
      res.status(200).send("Delete");
    }
  });
};

export { deleteFile };
