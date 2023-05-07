import React from 'react';
import Stars from "./Stars"

function Booklist({ book_list }) {
  return (
  <div className="container">
    <div className="row h-75">
      {book_list.map((book, index) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
          <div className="card mb-2">
            <img className="card-img-top h-75" src={book.volumeInfo.imageLinks.Thumbnail} alt={book.volumeInfo.title}/>
            <div className="card-body">
              <h5 className="card-title">{book.volumeInfo.title}</h5>
              <p className="card-text">{book.volumeInfo.authors}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Booklist;
