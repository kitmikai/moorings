const express = require("express");

const router = express.Router();

module.exports = () => {
  // Route for the index page
  router.get("/", (request, response) => {
    return response.send("Orders list");
  });

  router.get("/:orderdetail", (request, response) => {
    return response.send(`Order Detail page ${request.params.feedbackcontent}`);
  });

  return router;
};
