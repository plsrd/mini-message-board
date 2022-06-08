const fns = require('date-fns');

const formatDate = date => fns.format(date, 'MMM d, yyyy');

const messages = [
  {
    text: 'Hello World!',
    user: 'Charles',
    added: formatDate(new Date()),
    isNew: false,
  },
  {
    text: 'Hi there!',
    user: 'Amando',
    added: formatDate(fns.subDays(new Date(), 1)),
    isNew: false,
  },
];

module.exports = { messages, formatDate };
