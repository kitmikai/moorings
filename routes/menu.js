const express = require("express");
const Menu = require("../models/menu");
const router = express.Router();

// module.exports = (params) => {
// const menuSer
// Route for the index page
router.get("/menu", (request, response) => {
  Menu.find({}, (error, menu) => {
    if (error) {
      console.log(error);
    } else {
      response.render("pages/index", {
        pageTitle: "Welcome",
        menu: menu,
        msg: request.query.msg,
      });
      console.log(menu, "Pizza");
    }
    // console.log(menu, "Pizza");
  });

  //response.sendFile(path.join(__dirname, "./static/index.html"));
  // console.log(response);
  // return response.send("Menu list");
});

module.exports = router;
// return router;
// };
