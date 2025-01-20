import React from 'react';
import './ErrorPage.css';


function ErrorPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Error 404</h1>
      <p>La página que estás buscando no existe.</p>
      <a href="/" style={{ color: 'purple', textDecoration: 'underline' }}>
        Volver a la página de inicio
      </a>
    </div>
  );
}

export default ErrorPage;