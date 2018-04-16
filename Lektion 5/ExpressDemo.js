const express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

app.use(bodyParser.json());



app.get("/", (req, res) => {
    res.json({ id: req.params.id, name: "node class" });
});


//query is for when the url has ? for the parameters.
// /: id --> <req className="params id"
//?id=100 --> req.query.id
//in the body we use body parser.
app.post("/", (req, res) => {
    res.json({ id: req.query.id, name: "node class" });
});

app.listen(3000, () => console.log("Listening on port 3000"));