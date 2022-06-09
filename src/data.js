const fns = require('date-fns');

const formatDate = date => fns.format(date, 'MMM d, yyyy');

const messages = [
  {
    text: 'Hello World!',
    user: 'Charles',
    added: formatDate(new Date()),
    isNew: true,
  },
  {
    text: 'Hi there!',
    user: 'Amando',
    added: formatDate(fns.subDays(new Date(), 1)),
    isNew: true,
  },
];

module.exports = { messages, formatDate };
