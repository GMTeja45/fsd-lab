const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/home'){
        res.end("welcome to home webpage");
    }
    else if(req.url==='/about'){
        res.end("welcome to about page");
    }
    else if(req.url==='/contact'){
        res.end("welcome to contact page");
    }
    else{
        res.end("invalid website");
    }
});
server.listen(3000,()=>{
    console.log("server is running at http://localhost:3000")
})