import React from 'react';
import styles from './Footer.module.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <p>© 2023 Book Finder</p>
      </footer>
    );
  }
}

export default Footer; 