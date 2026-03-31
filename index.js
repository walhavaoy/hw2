'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const now = new Date();
    const isoTime = now.toISOString();
    const readableTime = now.toUTCString();

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Server Time</title>
</head>
<body>
  <h1>Server Time</h1>
  <p><strong>ISO 8601:</strong> ${isoTime}</p>
  <p><strong>UTC:</strong> ${readableTime}</p>
</body>
</html>
`);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

server.listen(PORT, () => {
  process.stdout.write(`Server listening on port ${PORT}\n`);
});
