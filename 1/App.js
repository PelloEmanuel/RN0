// Raíz de la app: tema + encabezado + pestañas arriba + pantalla activa.
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import TopTabs from './src/components/TopTabs';
import EstilosScreen from './src/screens/EstilosScreen';
import HolaMundoScreen from './src/screens/HolaMundoScreen';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';

// Lista de pestañas. Para sumar una: agregarla aquí y en SCREENS.
const TABS = [
  { key: 'inicio', label: 'Inicio', icon: '🏠' },
  { key: 'estilos', label: 'Estilos', icon: '🎨' },
];

// Pantalla que corresponde a cada pestaña.
const SCREENS = {
  inicio: HolaMundoScreen,
  estilos: EstilosScreen,
};

// Parte visible de la app (necesita el tema, por eso va dentro del provider).
function Root() {
  const { colors, isDark } = useTheme();
  const [active, setActive] = useState('inicio');
  const Screen = SCREENS[active];

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Header title="Hola Mundo" subtitle="React Native + Expo" />
      <TopTabs tabs={TABS} active={active} onChange={setActive} />
      <Screen />
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
