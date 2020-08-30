const express = require("express");

const Pizza = require("../models/pizza");
const router = express.Router();

// Catch all routes
router.get("/", (request, response) => {
  Pizza.find({}, (error, pizzas) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Pizza List:  ${pizzas}`);
      response.render("pages/pizzaorder", {
        pageTitle: "Pizza Hub",
        pizzas: pizzas,
      });
    }
  });
});

module.exports = router;
// console.log(`Menu Items:  ${pizzas}`);
