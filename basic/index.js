const https = require('https');
const fs = require('fs');
const path = require('path');

// Load SSL certificate and key
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

// Create HTTPS server
https.createServer(options, (req, res) => {
  // Serve index.html and style.css for a portfolio website
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(path.join(__dirname, 'index.html')));
  } else if (req.url === '/style.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end(fs.readFileSync(path.join(__dirname, 'style.css')));
  } else if (req.url === '/script.js') {
    // Optional: serve a placeholder JS file if needed
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.end('// JS placeholder');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}).listen(3000, () => {
  console.log('HTTPS server running at https://localhost:3000');
});
