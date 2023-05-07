const express = require('express');
const app = express();
const port = 3001;

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

async function googleBookSearch(searchTerms) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.items;
}
