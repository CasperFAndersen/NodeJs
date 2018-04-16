var fs = require("fs");
var id = 2;

module.exports = id => fs.createReadStream(__dirname + "/" + id + ".json");


var clientInfo = fs.createReadStream(__dirname + "/" + id + ".json", { encoding: "utf8", highWaterMark: 1 });
clientInfo.on("data", info => console.log(info));
//clientInfo.on("data", info => console.log(JSON.parse(info).Name));
//var writeable = fs.createWriteStream(console.log(data));
