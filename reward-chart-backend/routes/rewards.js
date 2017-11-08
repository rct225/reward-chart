var express = require('express');
var router = express.Router();
const rewardsController = require('../controllers').rewards;

/* GET home page. */
router.post('/', rewardsController.create);

module.exports = router;
