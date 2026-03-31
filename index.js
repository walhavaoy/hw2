const http = require('http');

const PORT = process.env.PORT || 3000;

const HTML = `<!DOCTYPE html>
<html>
<head><title>Hello World</title></head>
<body><h1>Hello World</h1></body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(HTML);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
