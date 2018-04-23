const mongoose = require('mongoose');

mongoose.connect('mongodb://nodeuser:nodeuser123@ds247439.mlab.com:47439/testdbcasper');

var Schema = mongoose.Schema;
var bookSchema = new Schema({
    title: String,
    author: String,
    Year: String
});
var Book = mongoose.model('Book', bookSchema);
var harryPotter = Book({
    title: "C#",
    author: "Troelsen",
    year: 2016
})
harryPotter.save(function (err) {
    if (err) console.log(err);
    console.log('succeded!');
})

Book.find({ "title": "C#" }, function (err, books) {
    if (err) console.log(err);
    console.log(books);
});