// src/components/layout/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Refrigerator } from "lucide-react";
import { navLinks } from "../../data/navLinks";
import { ButtonLink } from "../ui/ButtonLink";

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
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-headings font-semibold mb-2">Proyecto</h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://github.com/Marmopache/ProteInApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Código en GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-start">
          <h4 className="font-headings font-semibold mb-2">
            ¿Listo para empezar?
          </h4>
          <ButtonLink to="/inventario" className="mt-2">
            Ir al inventario
          </ButtonLink>
        </div>
      </div>

      <div className="border-t border-neutral-gray/30 mt-8 pt-4 text-center text-sm">
        <p>© {currentYear} ProteInMyFridge. Todos los derechos reservados.</p>
        <p className="mt-1 text-xs text-neutral-gray">
          Las metas de proteína son orientativas y no reemplazan el consejo
          médico o nutricional.
        </p>
      </div>
    </footer>
  );
};
