const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Set up your Express server here
app.get('/api/hello', (req, res) => {
  res.send('Hello from Express!');
});

// Export your Express server as a serverless function
module.exports.handler = serverless(app);
