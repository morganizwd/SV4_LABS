import React from 'react';
import BookItem from './BookItem';
import styles from './BookList.module.css'; // Импортируем наш CSS-модуль

function BookList({ books }) {
  return (
    <div className={styles.bookList}>
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
