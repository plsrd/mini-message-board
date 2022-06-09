var express = require('express');
var router = express.Router();
const data = require('../src/data');

const { messages, formatDate } = data;

/* GET form. */
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'New Message' });
});

router.post('/new', (req, res) => {
  const { user, text } = req.body;

  messages.forEach(
    (message, i) => (messages[i] = { ...message, isNew: false })
  );

  messages.unshift({ text, user, added: formatDate(new Date()), isNew: true });

  res.redirect('/');
});

module.exports = router;
