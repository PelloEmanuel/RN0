// Pestaña 2: ejemplos de estilos (colores, sombras, flexbox, texto, transformaciones y bordes).
import { StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import Page from '../components/Page';
import StyleCard from '../components/StyleCard';
import { useTheme } from '../theme/ThemeContext';

export default function EstilosScreen() {
  const { colors } = useTheme();

  return (
    <Page>
      {/* Título de la pantalla */}
      <View style={styles.heading}>
        <Text style={[styles.title, { color: colors.text }]}>Estilos</Text>
        <Text style={[styles.lead, { color: colors.textMuted }]}>
          Seis ejemplos de StyleSheet para tener a mano.
        </Text>
      </View>

      {/* Las tarjetas se acomodan solas según el ancho */}
      <View style={styles.grid}>
        <StyleCard title="Colores y esquinas" code="backgroundColor · borderRadius">
          <View style={styles.row}>
            {[
              [0, colors.accent],
              [8, colors.success],
              [16, colors.warning],
              [999, colors.text],
            ].map(([radius, color]) => (
              <View key={String(radius)} style={[styles.swatch, { backgroundColor: color, borderRadius: radius }]} />
            ))}
          </View>
        </StyleCard>

        <StyleCard title="Sombras" code="shadowOpacity · shadowRadius · elevation">
          <View style={styles.row}>
            {[0, 0.12, 0.3].map((opacity) => (
              <View
                key={opacity}
                style={[
                  styles.shadowBox,
                  { backgroundColor: colors.surface, borderColor: colors.border, shadowColor: colors.shadow },
                  { shadowOpacity: opacity, elevation: Math.round(opacity * 20) },
                ]}
              >
                <Text style={{ color: colors.textMuted, fontSize: 12 }}>{opacity === 0 ? 'Ninguna' : opacity}</Text>
              </View>
            ))}
          </View>
        </StyleCard>

        <StyleCard title="Flexbox" code="flex · justifyContent · alignItems">
          <View style={[styles.flexRow, { borderColor: colors.border }]}>
            <View style={[styles.flexItem, { flex: 1, backgroundColor: colors.accentSoft }]}>
              <Text style={{ color: colors.accent, fontWeight: '700' }}>1</Text>
            </View>
            <View style={[styles.flexItem, { flex: 2, backgroundColor: colors.accent }]}>
              <Text style={{ color: colors.onAccent, fontWeight: '700' }}>2</Text>
            </View>
            <View style={[styles.flexItem, { flex: 1, backgroundColor: colors.accentSoft }]}>
              <Text style={{ color: colors.accent, fontWeight: '700' }}>1</Text>
            </View>
          </View>
        </StyleCard>

        <StyleCard title="Tipografía" code="fontSize · fontWeight · letterSpacing">
          <Text style={{ color: colors.text, fontSize: 28, fontWeight: '800', letterSpacing: -0.5 }}>Título</Text>
          <Text style={{ color: colors.text, fontSize: 18, fontWeight: '600' }}>Subtítulo</Text>
          <Text style={{ color: colors.textMuted, fontSize: 14 }}>Texto de apoyo en gris.</Text>
          <Text style={{ color: colors.accent, fontSize: 12, fontWeight: '700', letterSpacing: 1.5 }}>ETIQUETA</Text>
        </StyleCard>

        <StyleCard title="Transformaciones" code="transform: rotate · scale">
          <View style={styles.row}>
            {[
              { transform: [{ rotate: '-8deg' }] },
              { transform: [{ rotate: '0deg' }] },
              { transform: [{ scale: 1.2 }] },
            ].map((t, i) => (
              <View key={i} style={[styles.swatch, { backgroundColor: colors.accentSoft, borderColor: colors.accent, borderWidth: 2, borderRadius: 10 }, t]} />
            ))}
          </View>
        </StyleCard>

        <StyleCard title="Tipos de borde" code="borderStyle: solid · dashed · dotted">
          <View style={styles.row}>
            {['solid', 'dashed', 'dotted'].map((s) => (
              <View key={s} style={[styles.borderBox, { borderStyle: s, borderColor: colors.accent }]}>
                <Text style={{ color: colors.textMuted, fontSize: 11 }}>{s}</Text>
              </View>
            ))}
          </View>
        </StyleCard>
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  heading: { gap: 6 },
  title: { fontSize: 32, fontWeight: '800', letterSpacing: -0.5 },
  lead: { fontSize: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 16, alignItems: 'center' },
  swatch: { width: 56, height: 56 },
  shadowBox: {
    width: 76,
    height: 56,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  flexRow: { flexDirection: 'row', gap: 8, padding: 8, borderWidth: 1, borderRadius: 10 },
  flexItem: { height: 48, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  borderBox: { width: 76, height: 52, borderWidth: 2, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
});
