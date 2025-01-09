const express = require('express');

const app = express();

const port = 3010;

app.get("/", (req, res) => {
    res.send("Welcome to Express");
  });

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });