const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const greetings = [
  'Hello!',
  'Hi there!',
  'Welcome!',
  'Hey!',
  'Greetings!',
  'Good day!',
  'Howdy!',
  "What's up!",
  'Yo!',
  'Salutations!',
];

app.get('/api/greeting', (req, res) => {
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  res.status(200).json({ greeting });
});

const server = app.listen(PORT, () => {
  process.stdout.write(`Server listening on port ${PORT}\n`);
});

module.exports = { app, server };
