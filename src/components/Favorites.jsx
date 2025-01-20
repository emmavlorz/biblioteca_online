import React from 'react';
import './Books.css';

function Favorites({ favorites, toggleFavorite }) {
  return (
    <div className="container">
      <h2>Libros Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No tienes libros en favoritos.</p>
      ) : (
        <ul className="book-list">
          {favorites.map((book) => (
            <li className="book-item" key={book.id}>
              <div>
                <strong>{book.title}</strong>
                <p>Autor: {book.author}</p>
                <p className="book-description">{book.description}</p>
              </div>
              <button onClick={() => toggleFavorite(book)}>
                Quitar de Favoritos
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
