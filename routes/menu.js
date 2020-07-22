const express = require("express");

const router = express.Router();

module.exports = () => {
  // Route for the index page
  router.get("/", (request, response) => {
    //response.sendFile(path.join(__dirname, "./static/index.html"));
    return response.send("Menu list");
  });

  return router;
};
