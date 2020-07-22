const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

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
