// Load the http and url modules
const http = require('http');
const url = require('url');

// Define server hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
  // Parse the URL to extract pathname and query parameters
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const queryObject = parsedUrl.query;

  // Set Content-Type to text/html
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Handle different routes
  if (pathname === '/') {
    // Home page with query parameter support
    if (queryObject.name) {
      res.end(`<h1>Hello, ${queryObject.name}!</h1><p>Welcome to the Home Page!</p>`);
    } else {
      res.end('<h1>Hello, Stranger!</h1><p>Welcome to the Home Page!</p>');
    }
  } else if (pathname === '/about') {
    // About page
    res.end('<h1>This is the About Page.</h1><p>Welcome to my first Node.js server!</p>');
  } else {
    // 404 - Page Not Found
    res.statusCode = 404;
    res.end('<h1>404 - Page Not Found</h1><p>The requested page does not exist.</p>');
  }
});

// Start server and listen on specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
