const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require("body-parser")

app.use(bodyParser.json())

const url = "/api/search"
const data = []

async function fetchBooks() {
  const bookList = await googleBookSearch("Harry Potter");
  return bookList;
}

app.get('/api', async (req, res) => {
  const bookList = await fetchBooks();
  console.log(bookList);
  //The google books
  res.json({ bookList });
});

app.post('/api/search', async (req, res) => {
  const search_string = req.body.search_string;
  console.log(search_string);
  const bookList = await googleBookSearch(search_string);
  res.json({ bookList });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

async function googleBookSearch(searchTerms) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.items;
}
