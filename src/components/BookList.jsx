import React from 'react';
import BookItem from './BookItem';

function BookList({ books }) {
  if (!books || books.length === 0) {
    return <p>No hay libros disponibles.</p>;
  }

  return (
    <ul>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
}

export default BookList;
