import http from 'http';

const PORT = 8080;

const server = http.createServer((req, res) => {
     console.log(req.url)
     console.log(req.method)
     res.writeHead(200, {
          'Content-Type': 'text/html'
     });
     res.end('<b>Hello World</b>');
});

server.listen(PORT, (err, res) => {
     if (err) {
          console.error('Error starting server:', err);
     } else {
          console.log('Server running on port', PORT);
     }
});
