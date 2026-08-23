import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Elemento donde React montará la aplicación
const container = document.getElementById('root');
// Si no existe, detiene la ejecución con un error
if (!container) {
  throw new Error('Root container missing in index.html');
}

// Crea la raíz de React
const root = ReactDOM.createRoot(container);

// Renderiza el componente principal dentro del modo estricto (ayuda a detectar problemas en el código)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
