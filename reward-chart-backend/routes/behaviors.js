var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    name: "Clean room",
    points: 10
  }, {
    id: 2,
    name: "Feed dog",
    points: 10
  }])
});

module.exports = router;
