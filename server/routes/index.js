const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (request, response, next) => {
  response.status(200);
  response.send('Hello World');
});

module.exports = router;
