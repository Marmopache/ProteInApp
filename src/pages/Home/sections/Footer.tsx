// src/pages/Home/sections/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Refrigerator } from 'lucide-react';
import { Button } from '../../../components/ui/Button';


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-neutral-light py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Logo & tagline */}
        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <Refrigerator size={28} className="text-primary" />
            <span className="font-headings text-2xl">ProteInMyFridge</span>
          </Link>
          <p className="text-sm text-neutral-gray">
            Tu aliado inteligente para comer bien con lo que ya tienes.
          </p>
        </div>
        {/* Links columns */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-headings font-semibold mb-2">Producto</h4>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:underline">Inicio</Link></li>
              <li><Link to="/how-it-works" className="hover:underline">Cómo funciona</Link></li>
              <li><Link to="/recipes" className="hover:underline">Recetas</Link></li>
              <li><Link to="/pricing" className="hover:underline">Precios</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headings font-semibold mb-2">Recursos</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Guía de usuario</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
        </div>
        {/* CTA */}
        <div className="flex flex-col items-start">
          <h4 className="font-headings font-semibold mb-2">¿Listo para empezar?</h4>
          <Button variant="primary" as="a" href="#" className="mt-2">
            Comenzar gratis
          </Button>
        </div>
      </div>
      <div className="border-t border-neutral-gray/30 mt-8 pt-4 text-center text-sm">
        © {currentYear} ProteInMyFridge. Todos los derechos reservados.
      </div>
    </footer>
  );
};
