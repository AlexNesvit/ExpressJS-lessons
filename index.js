const express = require("express");

const app = express();


const port = 3010;


const welcome = (req, res) => {

  res.send("Welcome to Express");

};


app.get("/", welcome);


const welcomeName = (req, res) => {

  res.send(`Welcome ${req.params.name}`);

};


app.get("/users/:name", welcomeName);


app

  .listen(port, () => {

    console.info(`Server is listening on port ${port}`);

  })

  .on("error", (err) => {

    console.error("Error:", err.message);

  });