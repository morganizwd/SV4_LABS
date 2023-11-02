// App.js
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [query, setQuery] = useState('Harry Potter');
  const [books, setBooks] = useState([]);

  const API_KEY = 'AIzaSyDDSwsmp9VSXi_OkoTm6tCHH9fM3zFNBmc'; 

  const fetchBooks = async (searchQuery) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}&key=${API_KEY}`);
      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        console.log("Результатов не найдено");
        setBooks([]);
        return;
      }

      setBooks(data.items);
    } catch (error) {
      console.error("Ошибка при загрузке книг:", error);
    }
  };

  useEffect(() => {
    fetchBooks(query);
  }, [query]); 

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={setQuery} /> {}
      <BookList books={books} />
      <Footer />
    </div>
  );
}

export default App;
