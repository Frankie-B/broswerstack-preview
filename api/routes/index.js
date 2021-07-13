var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(req);
  res.send('<h1>Welcome Ironhacker. </h1>');
});

module.exports = router;
