import http from 'http';

import a from './src/index.js';

console.log(a + 1);

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(8000, 'localhost');

console.log('Server running at http://localhost:8000/');
console.log(process.env.NODE_ENV);
