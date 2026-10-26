// Raíz de la app: tema + encabezado + pantalla (catálogo o detalle).
// Ocupa todo el ancho; el scroll vive dentro de cada pantalla.
import React, { useEffect, useState } from 'react';
import { BackHandler, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import CatalogScreen from './src/screens/CatalogScreen';
import DetailScreen from './src/screens/DetailScreen';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';
import { ComponentInfo } from './src/types';

// Parte visible de la app (necesita el tema, por eso va dentro del provider).
function Root() {
  const { colors, isDark } = useTheme();
  const [selected, setSelected] = useState<ComponentInfo | null>(null); // null = catálogo

  // El botón "atrás" de Android vuelve al catálogo
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (selected) {
        setSelected(null);
        return true; // ya lo manejamos
      }
      return false; // salir de la app
    });
    return () => sub.remove();
  }, [selected]);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={colors.background} />
      <Header title="Componentes nativos" subtitle="React Native + TypeScript" />
      {selected ? (
        <DetailScreen item={selected} onBack={() => setSelected(null)} />
      ) : (
        <CatalogScreen onSelect={setSelected} />
      )}
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
});
