const express = require("express");

// Routes that are used
const ordersRoute = require("./orders");
const feedbackRoute = require("./feedback");
const pizzaRoute = require("./pizza");
const Menu = require("../models/menu");

const router = express.Router();

// Catch all routes
router.get("/", (request, response) => {
  Menu.find({}, (error, menu) => {
    if (error) {
      console.log(error);
    } else {
      // console.log(`Menu Items:  ${menu}`);
      response.render("pages/index", {
        pageTitle: "Welcome",
        menuitems: menu,
        pageLink: "/pizza",
      });
    }
  });
});

// mount the routes
router.use("/orders", ordersRoute);
router.use("/feedback", feedbackRoute);
router.use("/pizza", pizzaRoute);

module.exports = router;
