// Contenedor de pantalla con scroll.
// Ocupa todo el ancho, así la barra de scroll queda en el borde de la ventana.
import { ScrollView, StyleSheet } from 'react-native';
import useBreakpoint from '../hooks/useBreakpoint';

export default function Page({ children }) {
  const { isWide } = useBreakpoint();

  return (
    <ScrollView
      style={styles.scroll}
      // Más margen lateral en pantallas anchas
      contentContainerStyle={[styles.content, isWide && styles.contentWide]}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  content: { padding: 16, paddingBottom: 48, gap: 24 },
  contentWide: { padding: 32, paddingBottom: 56 },
});
