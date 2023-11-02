import React from 'react';
import styles from './Footer.module.css'; // Импортируем наш CSS-модуль

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2023 Book Finder</p>
    </footer>
  );
}

export default Footer;
