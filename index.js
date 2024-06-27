const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('<hi>Hello World</h1>');
    res.end();
}).listen(3000)

console.log("server running on http://localhost:3000/")