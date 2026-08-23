import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
/**
 * App – the top‑level component rendered by `main.tsx`.
 *
 * It provides a <BrowserRouter> which watches the browser URL and
 * renders the matching <Route>.  For now we have a single route:
 *   path="/" → <Home />
 *
 * Future pages can be added as additional <Route> elements.
 */
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* In a larger app you could place layout wrappers (e.g. ThemeProvider) here */}
      <Routes>
        {/* Index route – renders the landing page */}
        <Route path="/" element={<Home />} />
        {/* Add more routes later, e.g. <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default App;