import React from 'react';
import Stars from "./Stars"

function Booklist({ book_list }) {
  return (
  <div className="container">
    <div className="row h-75">
      {book_list.map((book, index) => (
        <div className="col-lg-2 col-md-6 col-sm-12" key={index}>
          <div className="card mb-2">
            <img className="card-img-top h-75" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
            <div className="card-body">
              <h6 className="card-title">{book.volumeInfo.title}</h6>
              <p className="card-text">{book.volumeInfo.authors[0]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Booklist;
