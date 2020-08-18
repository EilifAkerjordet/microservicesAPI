const express = require('express');
const Book = require('./models/books_model');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (_, res) => {
  res.json({msg: 'books'});
});

app.get('/api/books', async (_, res) => {
  const books = await Book.find({});
  res.json(books);
});

app.post('/api/books', async (req, res) => {
  const book = new Book({name: req.body.name});
  const savedBook = await book.save();
  res.json(savedBook);
});

module.exports = app;
