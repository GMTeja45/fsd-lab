const http = require("http");

const server = http.createServer((req, res) => {
    
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello, World!'); 
        } else {
            
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found'); 
        }
    } else {
        
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
