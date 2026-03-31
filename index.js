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

app.get('/', (req, res) => {
  const now = new Date();
  const isoTime = now.toISOString();
  const readableTime = now.toUTCString();

  res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Server Time</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    html{font-size:100%}
    body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f5f5f5;color:#1a1a1a;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:1rem}
    .container{background:#fff;border-radius:0.5rem;padding:1.5rem;max-width:32rem;width:100%;box-shadow:0 1px 3px rgba(0,0,0,0.1)}
    h1{font-size:1.5rem;margin-bottom:1rem;color:#111}
    p{font-size:0.95rem;line-height:1.6;margin-bottom:0.5rem;overflow-wrap:break-word;word-break:break-all}
    p strong{color:#555}
    @media(min-width:48rem){h1{font-size:2rem}p{font-size:1.05rem}.container{padding:2rem}}
  </style>
</head>
<body>
  <div class="container">
    <h1>Server Time</h1>
    <p><strong>ISO 8601:</strong> ${isoTime}</p>
    <p><strong>UTC:</strong> ${readableTime}</p>
  </div>
</body>
</html>`);
});

app.get('/api/greeting', (req, res) => {
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  res.status(200).json({ greeting });
});

const server = app.listen(PORT, () => {
  process.stdout.write(`Server listening on port ${PORT}\n`);
});

module.exports = { app, server };
