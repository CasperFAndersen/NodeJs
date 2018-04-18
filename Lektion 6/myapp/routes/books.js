var express = require('express');
var router = express.Router();

var idCounter = 2;
const books = [{
    id: 0,
    title: 'C#',
    year: 2017
}, {
    id: 1,
    title: 'JavaScript',
    year: 2018
}
];

router.get('/', (req, res) => {
    res.json(books);
});

router.post('/', (req, res) => {
    books.push(req.body);
    res.status(200).send("ok");
});

router.use('/:id', (req, res, next) => {
    const book = books.find(b => Number(b.id) === Number(req.params.id));
    const index = books.findIndex(b => Number(b.id) === Number(req.params.id));
    req.book = book;
    req.indexOFBook = index;
    next();
});

router.get('/:id', (req, res) => {
    //TODO get the book with the id from books array
    res.json(req.book);
});

router.put('/:id', (req, res) => {
    // TODO update the book with id from books array
    books[req.indexOFBook] = req.book;
    res.status(200).send('ok');
});

router.delete('/:id', (req, res) => {
    //TODO delete the book with given id from the books array.
    delete books[req.indexOFBook];
    res.status(200).send('ok');
});

module.exports = router;

