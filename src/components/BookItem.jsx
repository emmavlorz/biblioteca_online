import React from 'react';
import './BookItem.css';


function BookItem({ book }) {
  if (!book) {
    return <li>Libro no encontrado.</li>;
  }

  return (
    <li>
      <h3>{book.title}</h3>
      <p><strong>Autor:</strong> {book.author}</p>
      <p>{book.description}</p>
    </li>
  );
}

export default BookItem;
