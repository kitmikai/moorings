const express = require("express");

const router = express.Router();

// module.exports = () => {
// Route for the index page
router.get("/feedback", (request, response) => {
  return response.send("Feedback page");
});

router.post("/feedback", (request, response) => {
  return response.send(`Feedback form submitted`);
});

module.exports = router;
//   return router;
// };
