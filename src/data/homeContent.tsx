// src/data/homeContent.tsx
// Centralized content for the ProteInMyFridge landing page

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
  ctaPrimary: "Probar versión beta",
  ctaSecondary: "Ver cómo funciona",
  badges: ["🧪 Versión beta", "🤖 Potenciado por IA", "💚 Acceso gratuito"],
};

export const HOW_IT_WORKS: Step[] = [
  {
    number: 1,
    title: "Configura tu perfil",
    description: 
      "Completa tu perfil y define tu objetivo. ProteIn calculará una meta diaria de proteína adaptada a ti.",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
  {
    number: 2,
    title: "Organiza tus alimentos",
    description:
      "Añade productos manualmente o escanea sus etiquetas con IA para mantener tu refrigerador y despensa actualizados.",
    icon: <Refrigerator className="w-6 h-6 text-primary" />,
  },
  {
    number: 3,
    title: "Recibe recomendaciones",
    description:
      "La IA genera recetas, menús y planes alimenticios según tus objetivos, gustos y los alimentos disponibles.",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
  {
    number: 4,
    title: "Aprovecha lo que tienes",
    description:
      "Recibe avisos cuando tus alimentos estén próximos a vencer y descubre recetas basadas en tus gustos y en lo que tienes disponible.",
    icon: <ChefHat className="w-6 h-6 text-primary" />,
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
      "La IA analiza los alimentos que tienes disponibles y te propone comidas que puedes preparar ahora.",
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
      "Recibe alertas sobre los productos que están próximos a vencer y obtén ideas para aprovecharlos a tiempo.",
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Nutrición que se adapta a ti",
    description:
      "ProteIn tiene en cuenta tus objetivos de proteína, calorías y alimentación para recomendar comidas que realmente te sirvan.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    avatar: "https://via.placeholder.com/80",
    name: "María Gómez",
    role: "Organiza mejor sus comidas",
    quote:
      "Antes abría el refrigerador y no sabía qué cocinar. Ahora la app me muestra opciones usando lo que ya tengo.",
  },
  {
    avatar: "https://via.placeholder.com/80",
    name: "Luis Pérez",
    role: "Cuida su alimentación",
    quote:
      "Me gusta que las recomendaciones consideran mis objetivos nutricionales sin obligarme a seguir un menú rígido.",
  },
  {
    avatar: "https://via.placeholder.com/80",
    name: "Familia Rodríguez",
    role: "Reduce el desperdicio",
    quote:
      "Ahora sabemos qué alimentos tenemos, cuáles están por vencer y qué podemos preparar con ellos.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "¿Cómo agrego los alimentos que tengo en casa?",
    answer:
      "Puedes agregarlos manualmente, escanear su código de barras o tomar una foto para que la IA ayude a identificar el producto y sus datos.",
  },
  {
    question: "¿Puedo separar mi refrigerador y despensa?",
    answer:
      "Sí. Puedes organizar tus alimentos según dónde los tengas para encontrar rápidamente lo que está disponible.",
  },
  {
    question: "¿Cómo funcionan las recomendaciones?",
    answer:
      "La IA considera los alimentos disponibles, tus preferencias, tus hábitos y tus objetivos nutricionales para sugerirte comidas que puedas preparar.",
  },
  {
    question: "¿La app me ayuda a evitar desperdiciar comida?",
    answer:
      "Sí. Puedes registrar fechas de vencimiento y recibir alertas junto con ideas de recetas para aprovechar primero los alimentos que están próximos a vencer.",
  },
  {
    question: "¿Puedo controlar mi consumo de proteína?",
    answer:
      "Sí. Puedes establecer un objetivo de proteína y la app puede considerarlo al recomendarte comidas durante el día.",
  },
  {
    question: "¿Necesito tener todos los ingredientes de una receta?",
    answer:
      "No necesariamente. Las recomendaciones priorizan los ingredientes que ya tienes y pueden sugerirte alternativas o indicarte qué te falta.",
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
