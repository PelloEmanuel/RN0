// Botón con dos variantes: "primary" (relleno) y "outline" (solo borde).
import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

interface Props {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
}

export default function Button({ label, onPress, variant = 'primary', accessibilityLabel, style }: Props) {
  const { colors } = useTheme();
  const primary = variant === 'primary';

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: primary ? colors.accent : colors.surface,
          borderColor: primary ? colors.accent : colors.border,
          opacity: pressed ? 0.8 : 1, // se atenúa al presionar
        },
        style,
      ]}
    >
      <Text style={[styles.label, { color: primary ? colors.onAccent : colors.text }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: { fontSize: 15, fontWeight: '600' },
});
