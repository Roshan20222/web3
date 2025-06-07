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

// Example route: demonstrate header and query parameter usage
app.get('/example', (req, res) => {
  // Get a custom header (e.g., x-user)
  const userHeader = req.header('x-user');
  // Get a query parameter (e.g., ?id=123)
  const id = req.query.id;
  res.json({
    message: 'Header and query parameter example',
    userHeader: userHeader || null,
    id: id || null
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

https.createServer(options, app).listen(3000, () => {
  console.log('HTTPS Express server running at https://localhost:3000');
});
