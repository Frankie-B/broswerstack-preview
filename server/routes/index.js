var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (request, response, next) => {
  response.status(200);
  response.json({messaeg: 'Express server is up and running'});
});

module.exports = router;
