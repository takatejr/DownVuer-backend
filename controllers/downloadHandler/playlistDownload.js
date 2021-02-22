import path from "path";
import fs from "fs";
import youtubedl from "youtube-dl";

const datas = []

const playlistDownload = async (req, res) => {
  const url = req.body.url;

  const playlist = (url) => {
    const video = youtubedl(url);

    // const outputTitle = `${info.title}` + ".mp3";
    const filePath = "";
    video.on("error", (err) => console.log("error 2:", err));

    const size = 1;
    video.on("info", function(info) {
      const filePath = path.join(`${info.fulltitle}` + ".mp3");
      video.pipe(fs.createWriteStream(filePath));
    });

    let pos = 0;
    video.on("data", function data(chunk) {
      pos += chunk.length;
      // `size` should not be 0 here.
      if (size) {
        const percent = ((pos / size) * 100).toFixed(2);
        process.stdout.cursorTo(0);
        process.stdout.clearLine(1);
        process.stdout.write(percent + "%");
      }
    });

    video.on("next", playlist);
  };

  try {
    playlist(url); 
  } catch (err) {
    console.log(err)
  }
};

export { playlistDownload };
