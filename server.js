const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

const port = 3000;

// Connect to database
let mongoDbUrl = "mongodb://localhost/";
let dbName = "moorings";
const connString = mongoDbUrl + dbName;

mongoose.connect(
  connString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Database connected successfully");
    }
  }
);

// Middlewares
app.use(express.static(path.join(__dirname, "./static")));

// Route for the index page
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "./static/index.html"));
});

app.listen(port, () => {
  console.log("Restarting");
  console.log(`Express server listening on port ${port}!`);
});
