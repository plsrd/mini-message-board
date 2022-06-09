var express = require('express');
var router = express.Router();
const data = require('../src/data');
const { body, validationResult } = require('express-validator');
const hbs = require('hbs');

const { messages } = data;
let errors = [];

hbs.registerHelper('ifIn', (string, errors, options) => {
  if (errors.length < 1) return;
  if (errors.errors.map(error => error.param).indexOf(string) > -1)
    return options.fn(this);

  return options.inverse(this);
});

/* GET form. */
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'New Message', errors });
});

router.post(
  '/new',
  body('user').isLength({ min: 3 }),
  body('text').isLength({ max: 150, min: 10 }),
  (req, res) => {
    const { user, text } = req.body;
    errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render('form', { title: 'New Message', errors, user, text });
    }

    messages.forEach(
      (message, i) => (messages[i] = { ...message, isNew: false })
    );

    messages.unshift({ text, user, added: new Date(), isNew: true });

    res.redirect('/');
  }
);

module.exports = router;
