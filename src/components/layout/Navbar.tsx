// src/components/layout/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Refrigerator } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const navLinks = [
    { to: '/', label: 'Producto' },
    { to: '/how-it-works', label: 'Cómo funciona' },
    { to: '/recipes', label: 'Recetas' },
    { to: '/login', label: 'Iniciar sesión' },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-30 backdrop-blur bg-white/70 dark:bg-neutral-dark/70 border-b border-neutral-gray/20 dark:border-neutral-gray/40 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Refrigerator size={28} className="text-primary" />
          <span className="font-headings text-xl text-neutral-dark dark:text-neutral-light">
            ProteInMyFridge
          </span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-neutral-dark dark:text-neutral-light hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" as="a" href="#" className="ml-4">
            Comenzar gratis
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={toggleMenu}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white dark:bg-neutral-dark pb-4 border-b border-neutral-gray/20 dark:border-neutral-gray/40">
          <div className="px-4 pt-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-neutral-dark dark:text-neutral-light hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" className="w-full mt-2" as="a" href="#">
              Comenzar gratis
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
