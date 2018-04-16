var http = require('http');
var fs = require('fs');

var port = 3000;

http.createServer(function listener(req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var html = fs.createReadStream(__dirname + '/index.html')
            .pipe(res);
    }
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        var html = fs.createReadStream(__dirname + '/person1.json').pipe(res);
    }
    else {
        res.writeHead(404);
        res.end();
    }
})
    .listen(port, "127.0.0.1", () => {
        console.log("Server is running on port" + port);
    });