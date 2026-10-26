// Filtra el catálogo por texto de búsqueda y por categoría.
import { useMemo } from 'react';
import { COMPONENTS } from '../data/components';
import { Category, ComponentInfo } from '../types';

export function useFilteredComponents(query: string, category: Category | null): ComponentInfo[] {
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    return COMPONENTS.filter((c) => {
      const okCategory = category === null || c.category === category; // null = todas
      const okQuery = q === '' || c.name.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q);
      return okCategory && okQuery;
    });
  }, [query, category]);
}
