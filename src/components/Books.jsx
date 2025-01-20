import React from 'react';
import './Books.css';

// Declaración del array de libros con descripciones
const books = [
  {
    id: 1,
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    description: 'Una obra maestra de la literatura latinoamericana.',
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    description: 'Una novela distópica sobre el totalitarismo.',
  },
  {
    id: 3,
    title: 'El principito',
    author: 'Antoine de Saint-Exupéry',
    description: 'Un cuento sobre la vida, el amor y la amistad.',
  },
];

function Books({ toggleFavorite, favorites }) {
  return (
    <div className="container">
      <h2>Libros Disponibles</h2>
      <ul className="book-list">
        {books.map((book) => (
          <li className="book-item" key={book.id}>
            <div>
              <strong>{book.title}</strong>
              <p>Autor: {book.author}</p>
              <p className="book-description">{book.description}</p>
            </div>
            <button onClick={() => toggleFavorite(book)}>
              {favorites.some((fav) => fav.id === book.id)
                ? 'Quitar de Favoritos'
                : 'Agregar a Favoritos'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;

