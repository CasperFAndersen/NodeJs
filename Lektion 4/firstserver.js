var http = require('http');
var fs = require('fs');

var port = 3000;

http.createServer(function listener(req, res) {
    res.writeHead(200, { "content-Type": "text/html" });

    var html = fs.createReadStream(__dirname + "/index.html", 'utf8').pipe(res);

    // fs.readFile(__dirname + "/index.html", (err, data) => {
    //     //if (err) fs.writeFileSync(__dirname + "/errorlist.txt", err)
    //     console.log(err);
    //     res.end(data);
    //});

    // var html = fs.readFileSync(__dirname + "/index.html");
    // res.end(html);
})
    .listen(port, "127.0.0.1", () => {
        console.log("Server is running on port" + port);
    });