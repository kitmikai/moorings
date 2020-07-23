const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes/index");

const app = express();

const port = 3000;

//Ember JS (ejs)template engine
app.set("view engine", "ejs");
// tell express where to find views
app.set("views", path.join(__dirname, "./views"));

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

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
