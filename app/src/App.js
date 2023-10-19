import React, { useState, useEffect } from 'react'; // Добавьте useEffect
import './app.css';

function App() {
  const [query, setQuery] = useState(''); 
  const [books, setBooks] = useState([]);
  const initialQuery = 'Harry Potter'; 
  
  const API_KEY = 'AIzaSyDDSwsmp9VSXi_OkoTm6tCHH9fM3zFNBmc';

  useEffect(() => {
    fetchBooks(initialQuery); // Загрузить книги при первой загрузке страницы
  }, []); 

  const fetchBooks = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`);
      const data = await response.json();
      console.log(response);
      console.log(data);
      setBooks(data.items || []);
    } 
    catch (error) {
      console.error("Ошибка при загрузке книг:", error);
    }
  };

  return (
    <div className="App">
      <h1>Поиск книг</h1>
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Поиск..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchBooks();
            }
          }}
          autoFocus
        />
        <span 
          className="clear-icon" 
          onClick={() => setQuery('')}
        >
          &times; 
        </span>
      </div>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
            />
            <div className='text-container'>
              <div className="title">{book.volumeInfo.title}</div>
              <div className='cathegory'>{book.volumeInfo.categories ? book.volumeInfo.categories[0] : "Категория не указана"}</div>
              <div className='author'>{book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Авторы не указаны"}</div>
            </div> 
          </div>
        ))}
      </div>
      <footer>
        <a href="https://github.com/morganizwd">GitHub</a>
        <span>© 2023</span>
      </footer>
    </div>
  );
}

export default App;