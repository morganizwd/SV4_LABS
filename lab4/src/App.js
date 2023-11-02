import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Импорт CSS для адаптивного дизайна

function App() {
  const [books, setBooks] = useState([]);

  const searchBooks = async (query) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await response.json();
    setBooks(data.items || []);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={searchBooks} />
      <BookList books={books} />
      <Footer />
    </div>
  );
}

export default App;