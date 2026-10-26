// Pestaña 1: "Hola Mundo" con una presentación ordenada.
import { StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import Page from '../components/Page';
import SectionLabel from '../components/SectionLabel';
import useBreakpoint from '../hooks/useBreakpoint';
import { useTheme } from '../theme/ThemeContext';

// Datos de la sección "Resumen".
const INFO = [
  { label: 'Framework', value: 'React Native' },
  { label: 'Entorno', value: 'Expo' },
  { label: 'Navegación', value: 'Pestañas superiores' },
  { label: 'Tema', value: 'Claro / oscuro' },
];

export default function HolaMundoScreen() {
  const { colors } = useTheme();
  const { width } = useBreakpoint();

  // El título crece con el ancho de la pantalla (entre 40 y 80)
  const titleSize = Math.max(40, Math.min(width * 0.08, 80));

  return (
    <Page>
      {/* Presentación principal, con una barra de acento a la izquierda */}
      <Card style={[styles.hero, { borderLeftColor: colors.accent }]}>
        <Text style={[styles.eyebrow, { color: colors.accent }]}>PRIMER PROYECTO</Text>
        <Text style={[styles.title, { color: colors.text, fontSize: titleSize }]}>Hola Mundo</Text>
        <Text style={[styles.lead, { color: colors.textMuted }]}>
          Mi primera aplicación con React Native y Expo: una pantalla limpia, pestañas arriba y
          modo claro u oscuro.
        </Text>
      </Card>

      {/* Resumen en tarjetas pequeñas */}
      <View style={styles.section}>
        <SectionLabel>Resumen</SectionLabel>
        <View style={styles.grid}>
          {INFO.map((item) => (
            <Card key={item.label} style={styles.infoCard}>
              <View style={styles.infoBody}>
                <Text style={[styles.infoLabel, { color: colors.textMuted }]}>{item.label}</Text>
                <Text style={[styles.infoValue, { color: colors.text }]}>{item.value}</Text>
              </View>
            </Card>
          ))}
        </View>
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  hero: { padding: 28, gap: 12, borderLeftWidth: 5 },
  eyebrow: { fontSize: 12, fontWeight: '800', letterSpacing: 1.5 },
  title: { fontWeight: '800', letterSpacing: -1.5 },
  lead: { fontSize: 17, lineHeight: 26, maxWidth: 640 },
  section: { gap: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  infoCard: { flexGrow: 1, flexBasis: 200 },
  infoBody: { padding: 16, gap: 4 },
  infoLabel: { fontSize: 13 },
  infoValue: { fontSize: 18, fontWeight: '700' },
});
