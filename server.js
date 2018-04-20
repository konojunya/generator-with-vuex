const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendfile("view/index.html");
});

// example api
app.get("/api/hoge", (req, res) => {
  setTimeout(() => {
    res.json({
      title: "hoge",
      body: "hoge"
    });
  }, 100);
});

app.listen(3000, () => {
  console.log("listen on http://localhost:3000");
});
