const express = require("express");

const app = express();

const port = 3000;

// Route for the index page
app.get("/", (request, response) => {
  response.send("Hello Express:-D");
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
