const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end("This is plain text");
    }
    else if (req.url === '/api') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify("This is JSON text"));
    }
    else if (req.url === '/.html') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end("<h1>This is HTML text</h1>");
    }
    else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end("Error: Not Found");
    }
});

server.listen(9000, () => {
    console.log("Server is running at http://localhost:9000");
});
