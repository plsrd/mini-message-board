var express = require('express');
var router = express.Router();
const data = require('../src/data');

const { messages } = data;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Mini Message Board',
    messages,
  });
});

module.exports = router;
