var http=require('http');
var url=require('url');
var fs=require('fs');
var pathna;

http.createServer((req, res)=>{
    pathna=url.parse(req.url, true);
    console.log(pathna.pathname);
    if(pathna.pathname=='/'||pathna.pathname=='/index.html'){
        fs.readFile('views/index.html', (err,data)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
    else if(pathna.pathname=='/about.html'){
        fs.readFile('views/about.html', (err,data)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
    else if(pathna.pathname=='/achievemant.html'){
        fs.readFile('views/achievemant.html', (err,data)=>{
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
}).listen(5000, ()=>{
    console.log('bharath1');
});