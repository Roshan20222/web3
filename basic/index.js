const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const path = require('path');

// Load SSL certificate and key
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

// Middleware: log each request
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Serve static files (index.html, style.css, script.js)
app.use(express.static(__dirname));

// 404 handler
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

https.createServer(options, app).listen(3000, () => {
  console.log('HTTPS Express server running at https://localhost:3000');
});
