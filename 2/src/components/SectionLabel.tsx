// Rótulo pequeño en mayúsculas que separa secciones.
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

export default function SectionLabel({ children }: { children: string }) {
  const { colors } = useTheme();
  return <Text style={[styles.label, { color: colors.textMuted }]}>{children.toUpperCase()}</Text>;
}

const styles = StyleSheet.create({
  label: { fontSize: 12, fontWeight: '700', letterSpacing: 1.2 },
});
