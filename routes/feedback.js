const express = require('express');

const router = express.Router();


  // Catch all routes
  router.get('/', (request, response) => {
    return response.send('Feedback page');
  });

  router.post('/success', (request, response) => {
    return response.send('Feedback form posted');
  });

 module.exports = router;

