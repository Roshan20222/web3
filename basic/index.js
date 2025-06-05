const https = require('https');
const fs = require('fs');

// Load SSL certificate and key
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

// Create HTTPS server
https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello, HTTPS from Node.js!');
}).listen(3000, () => {
  console.log('HTTPS server running at https://localhost:3000');
});
