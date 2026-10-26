// Tema claro/oscuro.
// Empieza con el modo del sistema y se puede cambiar a mano.
import { createContext, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native';
import { darkColors, lightColors } from './colors';

const ThemeContext = createContext(null);

// Envuelve la app y reparte los colores a todos los componentes.
export function ThemeProvider({ children }) {
  const system = useColorScheme();
  const [override, setOverride] = useState(null); // null = usar el sistema
  const isDark = (override ?? system) === 'dark';

  const value = useMemo(
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
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme debe usarse dentro de ThemeProvider');
  return ctx;
}
