// Piezas y datos compartidos por todas las demos.
import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

// Texto pequeño que explica la demo.
export function Caption({ children, style }: { children: React.ReactNode; style?: TextStyle }) {
  const { colors } = useTheme();
  return <Text style={[styles.caption, { color: colors.textMuted }, style]}>{children}</Text>;
}

// Imagen de ejemplo (necesita internet).
export const IMAGE_URI = 'https://picsum.photos/id/1015/800/400';

// Estilos que se repiten en varias demos.
export const styles = StyleSheet.create({
  caption: { fontSize: 13, marginTop: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  gap: { gap: 12 },
});
