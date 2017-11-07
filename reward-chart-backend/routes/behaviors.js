var express = require('express');
var router = express.Router();
const behaviorsController = require('../controllers').behaviors;

/* GET home page. */
router.get('/', behaviorsController.list);

module.exports = router;
