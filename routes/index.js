const express = require("express");

const ordersRoute = require("./orders");
const menuRoute = require("./menu");
const feedbackRoute = require("./feedback");
const Menu = require("../models/menu");

const router = express.Router();

// module.exports = () => {
// Route for the index page
router.get("/", (request, response) => {
  Menu.find({}, (error, menu) => {
    // if (error) {
    //   console.log(error);
    // } else {
    //   response.render("pages/index", {
    //     pageTitle: "Welcome",
    //     menu: menu,
    //     msg: request.query.msg,
    //   });
    // }
    console.log(menu, "Pizza");
  });
});

router.use("/orders", ordersRoute);
router.use("/menu", menuRoute);
router.use("/feedback", feedbackRoute);

module.exports = router;

// return router;
// };
