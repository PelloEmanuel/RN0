// Encabezado de la app: logo, título y botón de tema. Se ve en todas las pantallas.
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useBreakpoint from '../hooks/useBreakpoint';
import { useTheme } from '../theme/ThemeContext';
import ThemeToggle from './ThemeToggle';

interface Props {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: Props) {
  const { colors } = useTheme();
  const { isMedium } = useBreakpoint();

  return (
    <View style={[styles.bar, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
      {/* Logo cuadrado */}
      <View style={[styles.logo, { backgroundColor: colors.accent }]}>
        <Text style={[styles.logoText, { color: colors.onAccent }]}>TS</Text>
      </View>

      <View style={styles.titleBox}>
        <Text numberOfLines={1} style={[styles.title, { color: colors.text }]}>
          {title}
        </Text>
        {/* El subtítulo solo se ve si hay lugar */}
        {isMedium && <Text style={{ color: colors.textMuted, fontSize: 13 }}>{subtitle}</Text>}
      </View>

      <ThemeToggle />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  logo: { width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  logoText: { fontWeight: '800', fontSize: 16 },
  titleBox: { flex: 1 },
  title: { fontSize: 18, fontWeight: '700' },
});
