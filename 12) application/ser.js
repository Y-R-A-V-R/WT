const http = require('http');

const hostname = '127.0.0.1'; // You can change this to your server's IP address
const port = 3000; // You can choose a different port if needed

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.on('request', (req, res) => {
    if (req.url === '/') {
      res.end('Homepage');
    } else if (req.url === '/about') {
      res.end('About page');
    } else {
      res.statusCode = 404;
      res.end('Not found');
    }
  });

  const fs = require('fs');
const path = require('path');

server.on('request', (req, res) => {
  const filePath = path.join(__dirname, 'public', req.url);
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (!err) {
      fs.readFile(filePath, (err, data) => {
        if (!err) {
          res.setHeader('Content-Type', 'text/html');
          res.end(data);
        } else {
          console.error(err);
          res.statusCode = 500;
          res.end('Internal server error');
        }
      });
    } else {
      res.statusCode = 404;
      res.end('Not found');
    }
  });
});

server.on('request', (req, res) => {
    if (req.method === 'GET' && req.url === '/users') {
      res.json([/* user data */]);
    } else if (req.method === 'POST' && req.url === '/users') {
      // Create a new user
    } else {
      // ...
    }
  });
  