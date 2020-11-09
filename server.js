const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
    res.render("website/index.ejs")
})

app.listen(port, function () {
    console.log(`Corona-Online listen at ${port} port`);
  });