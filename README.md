[Read in English](README.md)

# ProteInMyFridge (ProteInApp)

Landing page responsiva y prototipo de interfaz de una aplicación web planificada para organizar los alimentos del refrigerador y la despensa y alcanzar una meta diaria de proteína.

> **Estado del proyecto:** prototipo de interfaz. Solo la landing page está implementada. Las funciones de la aplicación que se describen en la página están planificadas y aún no funcionan.

**Demo en vivo:** https://marmopache.github.io/ProteInApp/

## Captura de pantalla

![Landing page](docs/landing.png)

## Qué está implementado

| Funcionalidad                                                                                          | Estado          |
| ------------------------------------------------------------------------------------------------------ | --------------- |
| Landing page responsiva (Hero, Cómo funciona, Características, FAQ, Footer)                            | ✅ Implementado |
| Arquitectura de componentes reutilizables con contenido separado de la UI (`src/data/homeContent.tsx`) | ✅ Implementado |
| Despliegue automático en GitHub Pages (GitHub Actions)                                                 | ✅ Implementado |
| Inventario de alimentos (refrigerador y despensa)                                                      | 🗓 Planificado  |
| Meta diaria de proteína y seguimiento del progreso                                                     | 🗓 Planificado  |
| Alertas de fechas de vencimiento                                                                       | 🗓 Planificado  |
| Escaneo de códigos de barras y reconocimiento de productos con IA                                      | 🗓 Planificado  |
| Recomendaciones de recetas y comidas con IA                                                            | 🗓 Planificado  |
| Cuentas de usuario e inicio de sesión                                                                  | 🗓 Planificado  |

## Tecnologías

| Capa       | Tecnología                    |
| ---------- | ----------------------------- |
| Framework  | React 18                      |
| Lenguaje   | TypeScript                    |
| Build tool | Vite                          |
| Estilos    | Tailwind CSS                  |
| Iconos     | Lucide React                  |
| Estado     | React Hooks                   |
| Despliegue | GitHub Pages + GitHub Actions |

## Estructura del proyecto

```
ProteInApp/
├── .github/workflows/   # Despliegue en GitHub Pages
├── public/
├── src/
│   ├── components/      # Componentes de UI reutilizables
│   └── data/
│       └── homeContent.tsx   # Contenido de la landing page
├── index.html
├── package.json
├── tailwind.config.cjs
├── vite.config.ts
└── tsconfig.json
```

## Instalación

Requisitos: Node.js (LTS) y npm.

```bash
git clone https://github.com/Marmopache/ProteInApp.git
cd ProteInApp
npm install
npm run dev
```

Luego abrir la dirección local que aparece en la terminal (normalmente http://localhost:5173/).

Para generar la versión de producción:

```bash
npm run build
```

## Qué practiqué

- Construcción de una interfaz responsiva con React, TypeScript y Tailwind CSS
- Estructura de proyecto con componentes reutilizables y contenido centralizado
- Uso de Vite como herramienta de build
- Despliegue de un sitio estático con GitHub Pages y GitHub Actions

## Notas

Los testimonios de la landing page son ejemplos ilustrativos y no corresponden a usuarios reales.

## Licencia

Copyright (c) 2026 Gabriela Alvarado Rosales. Todos los derechos reservados.
Este código fuente es visible con fines demostrativos y de portafolio. No se permite copiar, modificar, distribuir, sublicenciar ni utilizar este código con fines comerciales sin autorización previa de la autora.

## Autora

**Gabriela Alvarado Rosales**, Desarrolladora Full-Stack Junior (Python, Django, React)
GitHub: [@Marmopache](https://github.com/Marmopache)
