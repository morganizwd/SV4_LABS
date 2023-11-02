import React from 'react';

function BookItem({ book }) {
  return (
    <div>
      <h3>{book.volumeInfo.title}</h3>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <p>{book.volumeInfo.authors.join(', ')}</p>
    </div>
  );
}

export default BookItem;
