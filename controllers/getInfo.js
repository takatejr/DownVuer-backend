import youtubedl from "youtube-dl";

const getInfo = async (req, res) => {
  const url = req.body.url;

  youtubedl.getInfo(url, function (err, info) {
    if (err) {
      console.error(err);
    } else {
      const mediaInfo = {
        formats: info.formats,
        filesize: info.filesize,
        id: info.id,
        title: info.title,
        url: info.url,
        thumbnail: info.thumbnail,
        description: info.description,
        filename: info._filename,
        formatID: info.format_id,
      };
      res.send(mediaInfo);
    }
  });
};

export { getInfo };
