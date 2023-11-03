import React from 'react';
import styles from './BookItem.module.css';

class BookItem extends React.Component {
  render() {
    const { book } = this.props;
    const thumbnail = book.volumeInfo?.imageLinks?.thumbnail ?? 'default_thumbnail.jpg';
    const authors = book.volumeInfo?.authors?.join(', ') ?? 'Author Unknown';
    const title = book.volumeInfo?.title ?? 'Title Unknown';

    return (
      <div className={styles.bookItem}>
        <h3 className={styles.bookTitle}>{title}</h3>
        <img className={styles.bookImage} src={thumbnail} alt={title} />
        <p className={styles.bookAuthors}>{authors}</p>
      </div>
    );
  }
}

export default BookItem; 