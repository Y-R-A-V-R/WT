const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  try {
    const filePath = path.join(__dirname, 'index.html'); // Replace 'index.html' with your actual file name
    const htmlContent = fs.readFileSync(filePath, 'utf8');

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error reading HTML file');
  }
});

const hostname = '127.0.0.1'; // You can change this to your server's IP address
const port = 3000; // Or any other available port
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`Server running at http://${hostname}:${port}/`);
});
