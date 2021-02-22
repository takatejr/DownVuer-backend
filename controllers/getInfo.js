import youtubedl from "youtube-dl";

const getInfo = async (req, res) => {
  const url = req.body.url;

  youtubedl.getInfo(url, function (err, info) {
    if (err) {
      console.error(err);
    } else {
      const isPlaylist = url.split('/')[3].slice(0, 8) === 'playlist' ? true : false
      console.log(isPlaylist)

     const mediaInfo = isPlaylist ?
        info.map(x => {
          return {
            formats: x.formats.map(y => y),
            filesize: x.filesize,
            id: x.id,
            title: x.title,
            url: x.url,
            thumbnail: x.thumbnail,
            description: x.description,
            filename: x._filename,
            formatID: x.format_id,
          };
        })
       :
          {
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
