// Tarjeta de ejemplo: título y código arriba, demo abajo.
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import Card from './Card';

export default function StyleCard({ title, code, children }) {
  const { colors } = useTheme();

  return (
    // Se acomoda sola en 1, 2 o 3 columnas según el ancho
    <Card style={styles.card}>
      <View style={[styles.head, { borderBottomColor: colors.border, backgroundColor: colors.surfaceAlt }]}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.code, { color: colors.textMuted }]}>{code}</Text>
      </View>
      <View style={styles.body}>{children}</View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { flexGrow: 1, flexBasis: 300 },
  head: { padding: 14, borderBottomWidth: 1, gap: 2 },
  title: { fontSize: 16, fontWeight: '700' },
  code: { fontSize: 12, fontFamily: 'monospace' },
  body: { padding: 16, gap: 12 },
});
