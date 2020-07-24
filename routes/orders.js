const express = require('express');

const router = express.Router();


// Catch all routes
router.get('/', (request, response) => {
  return response.send('Order list');
});

module.exports = router;


