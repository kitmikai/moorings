const express = require("express");

const router = express.Router();

module.exports = () => {
  // Route for the index page
  router.get("/", (request, response) => {
    return response.send("Feedback page");
  });

  router.post("/", (request, response) => {
    return response.send(`Feedback form submitted`);
  });

  return router;
};
