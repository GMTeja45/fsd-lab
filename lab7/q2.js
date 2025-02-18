const http = require("http");

const server = http.createServer((req, res) => {
    
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("This is plain text");
        } 
        else if (req.url === '/api') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "This is json text" }));
        } 
        else if (req.url === '/.html') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("<h1>This is an HTML response</h1>");
        } 
        else {
            
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Error 404: Not Found");
        }
    } else {
        
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end("Error 500: Internal Server Error");
    }
});

server.listen(9000, () => {
    console.log("Server is running at http://localhost:9000");
});
