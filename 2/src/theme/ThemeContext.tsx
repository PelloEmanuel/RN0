// Tema claro/oscuro: empieza con el del sistema y se puede cambiar a mano.
import React, { createContext, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { darkColors, lightColors, Palette } from './colors';

// Lo que entrega el tema a los componentes.
interface ThemeValue {
  isDark: boolean;
  colors: Palette;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeValue | null>(null);

// Envuelve la app y reparte los colores.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const system = useColorScheme();
  const [override, setOverride] = useState<'light' | 'dark' | null>(null); // null = sistema
  const isDark = (override ?? system) === 'dark';

  const value = useMemo<ThemeValue>(
    () => ({
      isDark,
      colors: isDark ? darkColors : lightColors,
      toggle: () => setOverride(isDark ? 'light' : 'dark'),
    }),
    [isDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// Hook para leer el tema desde cualquier componente.
export function useTheme(): ThemeValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme debe usarse dentro de ThemeProvider');
  return ctx;
}
