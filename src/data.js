const fns = require('date-fns');

const formatDate = date => fns.format(date, 'MMM d, yyyy');

const generateDate = () =>
  fns.subDays(new Date(), Math.floor(Math.random() * 50));

let messages = [
  {
    text: 'Stay close, do what I say and make as many mistakes as you want – just never the same one twice.',
    user: 'Jack',
    added: generateDate(),
    isNew: true,
  },
  {
    text: "Don't underestimate mediocrity... Lasting happiness, I've found, only really favors the unadventurous",
    user: 'Aurora',
    added: generateDate(),
    isNew: true,
  },
  {
    text: `We're all something we're not. Every one of us is stuck between the person we want to be and the person we can be. And there doesn't have to be a why.`,
    user: 'Fodder',
    added: generateDate(),
    isNew: true,
  },
  {
    text: `I’ve always been suspicious of game changers. Sometimes the game doesn’t need changing – or no one has a clear idea of which game will be changed, and for what and how much..`,
    user: 'Lucy',
    added: generateDate(),
    isNew: true,
  },
];

messages = messages.sort((a, b) => b.added - a.added);

module.exports = { messages, formatDate };
