import React from 'react';
import useBooks from './useBooks';
import './Home.css';

function Home({ toggleFavorite, favorites }) {
  const { books, setSearchTerm } = useBooks();

  return (
    <div className="container">
      <h2>Página de Inicio</h2>
      <p>Bienvenido a nuestra biblioteca en línea. Explora los libros que tenemos para ti.</p>
      <input
        type="text"
        placeholder="Buscar libros..."
        className="search-bar"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <strong>{book.title}</strong>
            <p>Autor: {book.author}</p>
            <button onClick={() => toggleFavorite(book)}>
              {favorites.some((fav) => fav.id === book.id) ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
