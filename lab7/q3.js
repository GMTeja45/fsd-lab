const http = require("http");

const server = http.createServer((req, res) => {
    
    switch (req.url) {
        case '/home':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Welcome to Home");
            break;

        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("About Us");
            break;

        case '/contact':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Contact Us");
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("404 Not Found");
            break;
    }
});

server.listen(9000, () => {
    console.log("Server is running at http://localhost:9000");
});
