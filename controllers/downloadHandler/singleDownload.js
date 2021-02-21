import fs from "fs";
import youtubedl from "youtube-dl";

const singleDownload = async (req, res) => {
  const url = req.body.url;

  youtubedl.getInfo(url, function (err, info) {
    const video = youtubedl(url, ["--format=18"]);
    const output = info.title;

    video.pipe(fs.createWriteStream(`${output}` + ".mp3"));
  });
};

export { singleDownload };