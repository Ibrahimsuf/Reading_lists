const express = require('express');
const app = express();
const path = require('path');

const book_list = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "https://images-na.ssl-images-amazon.com/images/I/81r+oyTgTLL.jpg"
    },
    {
      title: "The Great Gatsby Fart",
      author: "F. Scott Fitzgerald",
      image: "https://images-na.ssl-images-amazon.com/images/I/41U+H6UeRDL._SX331_BO1,204,203,200_.jpg"
    },
    {
      title: "1984",
      author: "George Orwell",
      image: "https://images-na.ssl-images-amazon.com/images/I/51NKWyK1W8L._SX321_BO1,204,203,200_.jpg"
    }
  ];

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handles any requests that don't match the above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/api/books', (req, res) => {
    res.send(book_list);
  });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
