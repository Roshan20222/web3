const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

// Load HTTPS credentials
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

// Define a route
app.get('/', (req, res) => {
  res.send('Welcome to the HTTPS Express server!');
});

// Create HTTPS server
https.createServer(options, app).listen(3443, () => {
  console.log('Server running at https://localhost:3443');
});
