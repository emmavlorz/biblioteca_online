import { useState, useEffect } from 'react';

function useBooks() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simula la carga inicial de datos
    const fetchBooks = async () => {
      const fetchedBooks = [
        { id: 1, title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
        { id: 2, title: '1984', author: 'George Orwell' },
        { id: 3, title: 'El principito', author: 'Antoine de Saint-Exupéry' },
      ];
      setBooks(fetchedBooks);
    };

    fetchBooks();
  }, []);

  // Función para filtrar libros según el término de búsqueda
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { books: filteredBooks, setSearchTerm };
}

export default useBooks;