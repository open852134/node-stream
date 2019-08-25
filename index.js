const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 1337;

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/video", function(req, res) {
  res.writeHead(200, { "Content-Type": "video/avi" });
  fs.createReadStream("test.mp4")
    .pipe(res)
    .on("finish", () => {
      console.log("finish");
    });
  // res.send("Hello World!");
});

app.listen(port, function() {
  console.log("Example app listening on port 3000!");
});
