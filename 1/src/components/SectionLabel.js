// Rótulo pequeño en mayúsculas que separa secciones.
import { StyleSheet, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

export default function SectionLabel({ children }) {
  const { colors } = useTheme();
  return <Text style={[styles.label, { color: colors.textMuted }]}>{String(children).toUpperCase()}</Text>;
}

const styles = StyleSheet.create({
  label: { fontSize: 12, fontWeight: '700', letterSpacing: 1.2 },
});
