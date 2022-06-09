const fns = require('date-fns');

const formatDate = date => fns.format(date, 'MMM d, yyyy');

const generateDate = () =>
  fns.subDays(new Date(), Math.floor(Math.random() * 50));

let messages = [
  {
    text: 'Hello World!',
    user: 'Charles',
    added: generateDate(),
    isNew: true,
  },
  {
    text: 'Hi there!',
    user: 'Amando',
    added: generateDate(),
    isNew: true,
  },
  {
    text: 'Hi there!',
    user: 'Amando',
    added: generateDate(),
    isNew: true,
  },
];

messages = messages.sort((a, b) => b.added - a.added);

module.exports = { messages, formatDate };
