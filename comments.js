// Create web server
// Create a web server that responds to requests to the /comments URL. This server should send back a JSON representation of a list of comments, as defined in the data/comments.js file.

const http = require('http');
const comments = require('./data/comments');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(comments));
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});