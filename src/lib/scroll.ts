// src/lib/scroll.ts
/** Smoothly scrolls to the element with the given id (works with HashRouter). */
export function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
