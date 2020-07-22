const express = require("express");

const ordersRoute = require("./orders");
const menuRoute = require("./menu");
const feedbackRoute = require("./feedback");

const router = express.Router();

module.exports = () => {
  // Route for the index page
  router.get("/", (request, response) => {
    //response.sendFile(path.join(__dirname, "./static/index.html"));
    response.render("pages/index", { pageTitle: "Welcome" });
  });

  router.use("/orders", ordersRoute());
  router.use("/menu", menuRoute());
  router.use("/feedback", feedbackRoute());

  return router;
};
