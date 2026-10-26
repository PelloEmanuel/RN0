// Tipos compartidos de la app.
import type { ComponentType } from 'react';

// Categorías del catálogo (en este orden se muestran los filtros).
export const CATEGORIES = [
  'Estructura',
  'Texto e imagen',
  'Entradas',
  'Listas',
  'Interacción',
  'Feedback',
] as const;

export type Category = (typeof CATEGORIES)[number];

// Ficha de un componente nativo dentro del catálogo.
export interface ComponentInfo {
  id: string;
  name: string;
  category: Category;
  summary: string; // qué es, en una frase
  usage: string; // para qué se usa
  code: string; // ejemplo mínimo de código
  Demo: ComponentType; // demo interactiva
  ownScroll?: boolean; // true si la demo ya trae su propio scroll (listas)
}
