export interface NavLinkItem {
  to: string;
  label: string;
}

export const navLinks: NavLinkItem[] = [
  { to: "/", label: "Inicio" },
  { to: "/inventario", label: "Inventario" },
  { to: "/meta", label: "Meta" },
  { to: "/recetas", label: "Recetas" },
];
