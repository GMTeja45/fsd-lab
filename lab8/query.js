const http=require("http");
const url=require("url");

const server=http.createServer((req,res)=>{
    const parseurl=url.parse(req.url,true);
    const query=parseurl.query;

    if(query.name){
        res.end(`hello ${query.name}`);
    }
    else{
        res.end("please provide name");
    }
});
server.listen(3000,()=>{
    console.log(`server is running at http://localhost:3000`);
})