const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/api/data", (req, res) => {
  fs.readFile("./data/shopping.json", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retreiving data");
      return;
    }
    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });
});

module.exports = app;
