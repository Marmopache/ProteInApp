# ProteInMyFridge – Gestión Inteligente de Alimentos y Nutrición

[![React](https://img.shields.io/badge/React-18-61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-latest-646CFF)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4)](https://tailwindcss.com/)

## Descripción del Proyecto

**ProteInMyFridge** es una aplicación web desarrollada con **React, Vite y TypeScript**, diseñada para ayudar a los usuarios a gestionar de forma inteligente los alimentos disponibles en su hogar y alcanzar sus objetivos diarios de consumo de proteína.

La aplicación combina gestión de inventario, seguimiento nutricional, recomendaciones personalizadas y herramientas de inteligencia artificial para facilitar la planificación de comidas, aprovechar los alimentos disponibles y reducir el desperdicio.

El sistema permite organizar los alimentos disponibles en el refrigerador y la despensa, registrar productos manualmente o mediante escaneo, recibir recomendaciones basadas en los alimentos disponibles y realizar un seguimiento del progreso nutricional.

## Objetivos

- Facilitar la gestión y organización de los alimentos disponibles en el hogar.
- Ayudar a los usuarios a establecer y alcanzar una meta diaria de proteína.
- Generar recomendaciones de comidas y recetas según los alimentos disponibles.
- Utilizar inteligencia artificial para automatizar el reconocimiento de productos y generar recomendaciones personalizadas.
- Reducir el desperdicio de alimentos mediante alertas de vencimiento y sugerencias de preparación.
- Desarrollar una experiencia de usuario moderna, responsiva y adaptable a dispositivos móviles y de escritorio.

## Tecnologías Utilizadas

- **Front-End:** React 18, TypeScript, JSX/TSX
- **Build Tool:** Vite
- **Estilos:** Tailwind CSS
- **Iconos:** Lucide React
- **Gestión de Estado:** React Hooks
- **Arquitectura:** Componentes reutilizables
- **Control de Versiones:** Git y GitHub
- **Editor de Código:** Visual Studio Code

## Funcionalidades

### Gestión de Alimentos

- Registro manual de alimentos disponibles en el hogar.
- Organización de productos según su ubicación, como refrigerador y despensa.
- Registro de información relevante de los productos.
- Escaneo de códigos de barras para facilitar el ingreso de alimentos.
- Reconocimiento de productos mediante fotografías utilizando inteligencia artificial.

### Objetivo de Proteína

- Configuración de una meta diaria de consumo de proteína.
- Cálculo de requerimientos nutricionales según el perfil del usuario.
- Seguimiento del consumo diario de proteína.
- Visualización del progreso hacia la meta establecida.
- Recomendaciones para ayudar al usuario a alcanzar su objetivo.

### Recomendaciones Inteligentes

- Generación de recetas utilizando los alimentos disponibles.
- Sugerencias de comidas personalizadas según gustos y objetivos.
- Recomendaciones basadas en los productos existentes en el refrigerador y la despensa.
- Planificación de comidas orientada al cumplimiento de objetivos nutricionales.

### Control de Vencimientos

- Registro de fechas de vencimiento de los alimentos.
- Alertas sobre productos próximos a vencer.
- Sugerencias de recetas para aprovechar alimentos antes de su vencimiento.
- Apoyo en la reducción del desperdicio de alimentos.

---

## Arquitectura de la Interfaz

La página principal está construida mediante componentes reutilizables que permiten mantener una estructura organizada y escalable.

### Home

- **Navbar:** barra de navegación principal.
- **Hero:** presentación de la aplicación, propuesta de valor y llamados a la acción.
- **HowItWorks:** explicación de los pasos principales para utilizar la aplicación.
- **Features:** presentación de las principales funcionalidades.
- **Testimonials:** testimonios y experiencias de usuarios.
- **FAQ:** preguntas frecuentes sobre la aplicación.
- **Footer:** información complementaria, enlaces y contacto.

Los contenidos utilizados en estas secciones se centralizan en:

`src/data/homeContent.tsx`

En este archivo se encuentran definidos los objetos principales:

- `HERO`
- `HOW_IT_WORKS`
- `FEATURES`
- `TESTIMONIALS`
- `FAQ_ITEMS`

Esta estructura permite separar los datos del contenido de los componentes visuales, facilitando su mantenimiento y modificación.

## Valor Añadido

- **Enfoque nutricional:** la aplicación prioriza el cumplimiento de objetivos diarios de proteína, integrando nutrición con la gestión de alimentos del hogar.
- **Inventario inteligente:** permite conocer qué alimentos tiene el usuario disponibles y utilizarlos como base para futuras recomendaciones.
- **Inteligencia artificial:** permite automatizar tareas como el reconocimiento de productos y la generación de recetas personalizadas.
- **Reducción del desperdicio:** considera las fechas de vencimiento para recomendar cómo aprovechar los alimentos disponibles.
- **Experiencia personalizada:** las recomendaciones pueden adaptarse a los alimentos disponibles, preferencias y objetivos del usuario.
- **Diseño responsivo:** la interfaz está desarrollada con Tailwind CSS y componentes flexibles para ofrecer una experiencia adecuada en dispositivos móviles y de escritorio.

---

## Autora

- **Gabriela Alvarado Rosales**

Desarrolladora Fullstack en formación

---

## Nota

Proyecto desarrollado como proyecto personal para aplicar conocimientos de desarrollo Front-End con **React, TypeScript, Vite y Tailwind CSS**, explorando además la integración de inteligencia artificial aplicada a la nutrición, gestión de alimentos y planificación de comidas.

## Licencia

Copyright (c) 2026 Gabriela Alvarado Rosales.

Este proyecto es de código fuente visible con fines demostrativos y de portafolio.
Todos los derechos están reservados.

No se permite copiar, modificar, distribuir, sublicenciar ni utilizar este código
con fines comerciales sin autorización previa de la autora.