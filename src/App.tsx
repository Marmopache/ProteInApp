// src/App.tsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Home } from "./pages/Home/Home";
import Inventory from "./pages/Inventory/Inventory";
import Profile from "./pages/Profile/Profile";
import Recipes from "./pages/Recipes/Recipes";
import NotFound from "./pages/NotFound/NotFound";

/**
 * HashRouter is used because GitHub Pages only serves static files:
 * URLs like /#/inventario never hit the server, so reloading works.
 */
export const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="inventario" element={<Inventory />} />
          <Route path="meta" element={<Profile />} />
          <Route path="recetas" element={<Recipes />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
