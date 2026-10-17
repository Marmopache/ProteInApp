// src/data/homeContent.tsx
// Centralized content for the ProteInMyFridge landing page
// NOTE: this is a UI prototype. Features described here are planned, not yet implemented.

import {
  Refrigerator,
  Target,
  Sparkles,
  ChefHat,
  ScanLine,
  Package,
  Utensils,
  CalendarClock,
} from "lucide-react";

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  quote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const HERO = {
  title: "Tu proteína diaria, sin complicarte.",
  subtitle:
    "Organiza lo que tienes en casa y descubre qué comer para alcanzar tus objetivos cada día.",
  ctaPrimary: "Conocer el proyecto",
  ctaSecondary: "Ver cómo funciona",
  badges: [
    "🚧 Prototipo en desarrollo",
    "🤖 IA planificada",
    "💚 Proyecto de portafolio",
  ],
};

export const HOW_IT_WORKS: Step[] = [
  {
    number: 1,
    title: "Configura tu perfil",
    description:
      "Completa tu perfil y define tu objetivo. ProteIn calculará una meta diaria de proteína adaptada a ti.",
    icon: <Target className="w-6 h-6 text-white" />,
  },
  {
    number: 2,
    title: "Organiza tus alimentos",
    description:
      "Añade productos manualmente o escanea sus etiquetas con IA para mantener tu refrigerador y despensa actualizados.",
    icon: <Refrigerator className="w-6 h-6 text-white" />,
  },
  {
    number: 3,
    title: "Recibe recomendaciones",
    description:
      "La IA generará recetas, menús y planes alimenticios según tus objetivos, gustos y los alimentos disponibles.",
    icon: <Sparkles className="w-6 h-6 text-white" />,
  },
  {
    number: 4,
    title: "Aprovecha lo que tienes",
    description:
      "Recibirás avisos cuando tus alimentos estén próximos a vencer y descubrirás recetas basadas en tus gustos y en lo que tienes disponible.",
    icon: <ChefHat className="w-6 h-6 text-white" />,
  },
];

export const FEATURES: Feature[] = [
  {
    icon: <Package className="w-8 h-8 text-primary" />,
    title: "Inventario inteligente",
    description:
      "Registra lo que tienes en tu refrigerador y despensa para mantener tu cocina organizada desde un solo lugar.",
  },
  {
    icon: <ScanLine className="w-8 h-8 text-primary" />,
    title: "Agrega alimentos fácilmente",
    description:
      "Escanea códigos de barras o toma fotos de tus productos para registrar automáticamente sus datos.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "¿Qué puedo cocinar?",
    description:
      "La IA analizará los alimentos que tienes disponibles y te propondrá comidas que puedes preparar ahora.",
  },
  {
    icon: <Utensils className="w-8 h-8 text-primary" />,
    title: "Recetas adaptadas a ti",
    description:
      "Recibe ideas de comidas basadas en tus gustos, hábitos, ingredientes disponibles y objetivos.",
  },
  {
    icon: <CalendarClock className="w-8 h-8 text-primary" />,
    title: "Evita que tus alimentos venzan",
    description:
      "Recibirás alertas sobre los productos que están próximos a vencer y obtendrás ideas para aprovecharlos a tiempo.",
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Nutrición que se adapta a ti",
    description:
      "ProteIn tendrá en cuenta tus objetivos de proteína, calorías y alimentación para recomendar comidas que realmente te sirvan.",
  },
];

// Illustrative examples only: they are NOT real users.
const PLACEHOLDER_AVATAR =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='80' height='80' fill='%23374151'/></svg>";

export const TESTIMONIALS: Testimonial[] = [
  {
    avatar: PLACEHOLDER_AVATAR,
    name: "María Gómez",
    role: "Ejemplo ilustrativo (no es un usuario real)",
    quote:
      "Antes abría el refrigerador y no sabía qué cocinar. Ahora la app me muestra opciones usando lo que ya tengo.",
  },
  {
    avatar: PLACEHOLDER_AVATAR,
    name: "Luis Pérez",
    role: "Ejemplo ilustrativo (no es un usuario real)",
    quote:
      "Me gusta que las recomendaciones consideran mis objetivos nutricionales sin obligarme a seguir un menú rígido.",
  },
  {
    avatar: PLACEHOLDER_AVATAR,
    name: "Familia Rodríguez",
    role: "Ejemplo ilustrativo (no es un usuario real)",
    quote:
      "Ahora sabemos qué alimentos tenemos, cuáles están por vencer y qué podemos preparar con ellos.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "¿Cómo agregaré los alimentos que tengo en casa?",
    answer:
      "Podrás agregarlos manualmente, escanear su código de barras o tomar una foto para que la IA ayude a identificar el producto y sus datos.",
  },
  {
    question: "¿Podré separar mi refrigerador y despensa?",
    answer:
      "Sí. Podrás organizar tus alimentos según dónde los tengas para encontrar rápidamente lo que está disponible.",
  },
  {
    question: "¿Cómo funcionarán las recomendaciones?",
    answer:
      "La IA considerará los alimentos disponibles, tus preferencias, tus hábitos y tus objetivos nutricionales para sugerirte comidas que puedas preparar.",
  },
  {
    question: "¿La app me ayudará a evitar desperdiciar comida?",
    answer:
      "Esa es la idea. Podrás registrar fechas de vencimiento y recibir alertas junto con ideas de recetas para aprovechar primero los alimentos que están próximos a vencer.",
  },
  {
    question: "¿Podré controlar mi consumo de proteína?",
    answer:
      "Sí. Podrás establecer un objetivo de proteína y la app lo considerará al recomendarte comidas durante el día.",
  },
  {
    question: "¿Necesitaré tener todos los ingredientes de una receta?",
    answer:
      "No necesariamente. Las recomendaciones priorizarán los ingredientes que ya tienes y podrán sugerirte alternativas o indicarte qué te falta.",
  },
];

/*
export const PRICING_PLANS = [
  {
    name: "Free",
    price: "0",
    features: ["Inventario básico", "Planes semanales", "Recetas limitadas"],
  },
  {
    name: "Pro",
    price: "9.99",
    features: [
      "Inventario premium",
      "Planes diarios",
      "Acceso a OCR avanzado",
      "Soporte prioritario",
    ],
  },
];*/
