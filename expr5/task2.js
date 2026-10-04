// Load the http module
const http = require('http');

// Define server hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Handle different routes
  if (req.url === '/') {
    res.end('Welcome to the Home Page!\n');
  } else if (req.url === '/about') {
    res.end('This is the About Page.\n');
  } else {
    res.statusCode = 404;
    res.end('404 - Page Not Found\n');
  }
});

// Start server and listen on specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
