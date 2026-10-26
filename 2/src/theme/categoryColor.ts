// Cada categoría tiene un color de la paleta, para reconocerla de un vistazo.
import { Category } from '../types';
import { Palette } from './colors';

export function categoryColor(colors: Palette, category: Category): string {
  const map: Record<Category, string> = {
    Estructura: colors.accent,
    'Texto e imagen': colors.success,
    Entradas: colors.warning,
    Listas: colors.accent,
    Interacción: colors.success,
    Feedback: colors.warning,
  };
  return map[category];
}
