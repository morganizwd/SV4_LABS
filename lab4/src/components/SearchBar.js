import React from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleSearch = () => {
    this.props.onSearch(this.state.inputValue.trim());
  };

  updateInputValue = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    return (
      <div className={styles.searchBarContainer}>
        <input
          className={styles.searchInput}
          type="text"
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          placeholder="Search for books"
          onKeyPress={this.handleKeyPress}
        />
        <button
          className={styles.searchButton}
          onClick={this.handleSearch}
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
