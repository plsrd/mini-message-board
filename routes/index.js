var express = require('express');
var router = express.Router();
const hbs = require('hbs');
const data = require('../src/data');

const { messages } = data;

hbs.registerHelper('count', () => {
  return messages.filter(message => message.isNew).length;
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Mini Message Board',
    messages,
  });
});

module.exports = router;
