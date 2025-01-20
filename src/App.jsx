import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import Contact from './components/Contact';
import About from './components/About';
import Favorites from './components/Favorites';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [favorites, setFavorites] = useState(() => {
    // Recupera los favoritos de localStorage al cargar la página
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const toggleFavorite = (book) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === book.id);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.id !== book.id);
      } else {
        return [...prevFavorites, book];
      }
    });
  };

  // Guarda los favoritos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Home toggleFavorite={toggleFavorite} favorites={favorites} />}
            />
            <Route
              path="/books"
              element={<Books toggleFavorite={toggleFavorite} favorites={favorites} />}
            />
            <Route
              path="/favorites"
              element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
