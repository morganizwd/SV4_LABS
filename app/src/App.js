import React, { useState, useEffect } from 'react';
import './app.css';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const initialQuery = 'Harry Potter';
  
  const API_KEY = 'AIzaSyDDSwsmp9VSXi_OkoTm6tCHH9fM3zFNBmc';

  const fetchBooks = async (searchQuery) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${API_KEY}`);
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
    fetchBooks(initialQuery);
  }, []);

  return (
    <div className="App">
      <h1>Поиск книг</h1>
      <input 
        type="text" 
        placeholder="Поиск..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchBooks(query);
          }
        }}
      />
      <div className="books">
        {books.length === 0 ? (
          <p>Результатов не найдено</p>
        ) : (
          books.map((book) => (
            <div key={book.id} className="book-card">
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
              />
              <h2>{book.volumeInfo.title}</h2>
              <p>{book.volumeInfo.categories ? book.volumeInfo.categories[0] : "Категория не указана"}</p>
              <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Авторы не указаны"}</p>
            </div>
          ))
        )}
      </div>
      <footer>
        <a href="https://github.com/morganizwd">GitHub</a>
        <span>© 2023</span>
      </footer>
    </div>
  );
}

export default App;