import React from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'Harry Potter',
      books: [],
    };
  }

  componentDidMount() {
    this.fetchBooks(this.state.query);
  }

  fetchBooks = async (searchQuery) => {
    const API_KEY = 'AIzaSyDDSwsmp9VSXi_OkoTm6tCHH9fM3zFNBmc';
    
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}&key=${API_KEY}`);
      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        console.log("Результатов не найдено");
        this.setState({ books: [] });
        return;
      }

      this.setState({ books: data.items });
    } catch (error) {
      console.error("Ошибка при загрузке книг:", error);
    }
  };

  handleSearch = (searchQuery) => {
    this.setState({ query: searchQuery }, () => {
      this.fetchBooks(this.state.query);
    });
  }   

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar onSearch={this.handleSearch} />
        <BookList books={this.state.books} />
        <Footer />
      </div>
    );
  }
}

export default App; 