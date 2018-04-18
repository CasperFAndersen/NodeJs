const express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

var fs = require("fs");
var id = 1;

module.exports = id => fs.createReadStream(__dirname + "/" + id + ".json");




app.use(bodyParser.json());



app.get("/", (req, res) => {
    var clientInfo = fs.createReadStream(__dirname + "/" + id + ".json", { encoding: "utf8" });
    clientInfo.on("data", info => res.send(JSON.parse(info).Name));
    //clientInfo.on("data", info => console.log(info));
});

//query is for when the url has ? for the parameters.
// /: id --> <req className="params id"
//?id=100 --> req.query.id
//in the body we use body parser.
app.post("/", (req, res) => {
    res.json({ id: req.query.id, name: "node class" });
});

app.listen(3000, () => console.log("Listening on port 3000"));