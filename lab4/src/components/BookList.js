import React from 'react';
import BookItem from './BookItem';
import styles from './BookList.module.css';

class BookList extends React.Component {
  render() {
    const { books } = this.props;
    return (
      <div className={styles.bookList}>
        {books.map(book => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    );
  }
}

export default BookList; 