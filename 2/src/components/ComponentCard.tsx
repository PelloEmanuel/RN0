// Tarjeta del catálogo: barra de color de la categoría, nombre y resumen.
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { categoryColor } from '../theme/categoryColor';
import { useTheme } from '../theme/ThemeContext';
import { ComponentInfo } from '../types';
import Card from './Card';

interface Props {
  item: ComponentInfo;
  onPress: (item: ComponentInfo) => void;
}

export default function ComponentCard({ item, onPress }: Props) {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={() => onPress(item)}
      accessibilityRole="button"
      accessibilityLabel={`Ver ${item.name}`}
      style={({ pressed }) => [styles.press, { opacity: pressed ? 0.85 : 1 }]}
    >
      <Card style={[styles.card, { borderLeftColor: categoryColor(colors, item.category) }]}>
        <View style={styles.body}>
          <Text style={[styles.category, { color: colors.textMuted }]}>{item.category.toUpperCase()}</Text>
          <Text style={[styles.name, { color: colors.text }]}>{`<${item.name} />`}</Text>
          <Text style={{ color: colors.textMuted, fontSize: 14, lineHeight: 20 }}>{item.summary}</Text>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: { flex: 1 },
  card: { flex: 1, borderLeftWidth: 5 },
  body: { padding: 16, gap: 4 },
  category: { fontSize: 11, fontWeight: '700', letterSpacing: 1.2 },
  name: { fontSize: 18, fontWeight: '700' },
});
