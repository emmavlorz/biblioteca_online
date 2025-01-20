import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>La Biblioteca de Borges - Un espacio para los amantes de la lectura</h1>
      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/books">Libros</Link>
        <Link to="/favorites">Favoritos</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/about">Sobre nosotros</Link>
      </nav>
    </header>
  );
}

export default Header;
