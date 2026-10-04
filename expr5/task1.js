// Load the http and url modules
const http = require('http');
const url = require('url');

// Define server hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Parse the URL to extract query parameters
  const queryObject = url.parse(req.url, true).query;
  // Check if "name" parameter is given
  if (queryObject.name) {
    res.end(`Hello, ${queryObject.name}!\n`);
  } else {
    res.end('Hello, Stranger!\n');
  }
});

// Start server and listen on specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
