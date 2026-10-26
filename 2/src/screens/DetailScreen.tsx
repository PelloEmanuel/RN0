// Detalle de un componente: qué es, para qué sirve, código y demo en vivo.
// En pantallas anchas: información a la izquierda y demo a la derecha.
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';
import CodeBlock from '../components/CodeBlock';
import SectionLabel from '../components/SectionLabel';
import useBreakpoint from '../hooks/useBreakpoint';
import { categoryColor } from '../theme/categoryColor';
import { useTheme } from '../theme/ThemeContext';
import { ComponentInfo } from '../types';

interface Props {
  item: ComponentInfo;
  onBack: () => void;
}

// Bloque de texto: categoría, nombre, resumen, uso y código (se puede ocultar).
function Info({ item }: { item: ComponentInfo }) {
  const { colors } = useTheme();
  const [showCode, setShowCode] = useState(false);

  return (
    <View style={styles.info}>
      {/* Etiqueta de categoría con su color */}
      <View style={[styles.tag, { backgroundColor: colors.accentSoft }]}>
        <View style={[styles.dot, { backgroundColor: categoryColor(colors, item.category) }]} />
        <Text style={{ color: colors.text, fontWeight: '600', fontSize: 13 }}>{item.category}</Text>
      </View>

      <Text style={[styles.name, { color: colors.text }]}>{`<${item.name} />`}</Text>
      <Text style={[styles.summary, { color: colors.text }]}>{item.summary}</Text>

      <View style={styles.block}>
        <SectionLabel>¿Para qué se usa?</SectionLabel>
        <Text style={{ color: colors.textMuted, fontSize: 16, lineHeight: 24 }}>{item.usage}</Text>
      </View>

      <Button
        variant="outline"
        label={showCode ? 'Ocultar código' : 'Ver código'}
        onPress={() => setShowCode((v) => !v)}
        style={styles.codeButton}
      />
      {showCode && <CodeBlock code={item.code} />}
    </View>
  );
}

export default function DetailScreen({ item, onBack }: Props) {
  const { isWide } = useBreakpoint();
  const { Demo } = item;

  // Botón "Volver"
  const back = <Button variant="outline" label="‹ Volver" onPress={onBack} accessibilityLabel="Volver al catálogo" style={styles.back} />;

  // Caja con la demo. Si la demo ya tiene scroll propio, ocupa todo el alto disponible.
  const demo = (
    <Card style={[styles.demoBox, item.ownScroll && styles.fill]}>
      <SectionLabel>Probalo</SectionLabel>
      <Demo />
    </Card>
  );

  // PANTALLA ANCHA: dos columnas
  if (isWide) {
    return (
      <View style={styles.wide}>
        <ScrollView style={styles.fill} contentContainerStyle={styles.col}>
          {back}
          <Info item={item} />
        </ScrollView>
        {item.ownScroll ? (
          <View style={[styles.fill, styles.col]}>{demo}</View>
        ) : (
          <ScrollView style={styles.fill} contentContainerStyle={styles.col} keyboardShouldPersistTaps="handled">
            {demo}
          </ScrollView>
        )}
      </View>
    );
  }

  // PANTALLA ANGOSTA: una columna
  return item.ownScroll ? (
    <View style={[styles.fill, styles.col]}>
      {back}
      <Info item={item} />
      {demo}
    </View>
  ) : (
    <ScrollView style={styles.fill} contentContainerStyle={styles.col} keyboardShouldPersistTaps="handled">
      {back}
      <Info item={item} />
      {demo}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  wide: { flex: 1, flexDirection: 'row' },
  col: { padding: 20, paddingBottom: 48, gap: 20 },
  back: { alignSelf: 'flex-start' },
  info: { gap: 12 },
  tag: { flexDirection: 'row', alignItems: 'center', gap: 8, alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  name: { fontSize: 34, fontWeight: '800', letterSpacing: -0.5 },
  summary: { fontSize: 19, fontWeight: '600' },
  block: { gap: 6, marginTop: 4 },
  codeButton: { alignSelf: 'flex-start' },
  demoBox: { padding: 18, gap: 14 },
});
