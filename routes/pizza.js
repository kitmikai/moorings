const express = require("express");

const Pizza = require("../models/pizza");
const router = express.Router();

// Catch all routes
router.get("/", (request, response) => {
  Pizza.find({}, (error, pizza) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Menu Items:  ${pizza}`);
      response.render("pages/pizzaorder", {
        pageTitle: "Welcome",
        pizzaitems: pizza,
      });
    }
  });
});

module.exports = router;
