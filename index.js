const express = require("express");
const multer = require("multer");
const ffmpeg = require("fluent-ffmpeg");
const app = express();
const upload = multer({ dest: "uploads/" });
const PORT = 5150;

app.post("/upload", upload.single("video"), (req, res) => {
  const path = req.file;
  const outputPath = "outputs/compressed-video.mp4";

  console.log(path);

  // ffmpeg(path)
  //   .outputOptions([
  //     "-vcodec libx264", // Set video codec
  //     "-crf 28", // Set compression rate factor (lower is higher quality)
  //     "-preset fast", // Compression speed (faster encoding with potentially higher file size)
  //     "-acodec aac", // Set audio codec
  //     "-strict -2",
  //     "-b:a 128k", // Audio bitrate
  //   ])
  //   .on("end", function () {
  //     console.log("Compression finished");
  //     res.download(outputPath);
  //   })
  //   .on("error", function (err) {
  //     console.log("An error occurred: " + err.message);
  //     res.status(500).send("An error occurred: " + err.message);
  //   })
  //   .save(outputPath);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
