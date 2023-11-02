import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    onSearch(inputValue.trim());
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchInput}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for books"
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button
        className={styles.searchButton}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
