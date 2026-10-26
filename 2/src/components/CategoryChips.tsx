// Fila de filtros por categoría. "Todos" quita el filtro.
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { CATEGORIES, Category } from '../types';

interface Props {
  selected: Category | null;
  onSelect: (category: Category | null) => void;
}

export default function CategoryChips({ selected, onSelect }: Props) {
  const { colors } = useTheme();
  const options: (Category | null)[] = [null, ...CATEGORIES]; // null = "Todos"

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
      {options.map((cat) => {
        const active = cat === selected;
        return (
          <Pressable
            key={cat ?? 'todos'}
            onPress={() => onSelect(cat)}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
            style={[
              styles.chip,
              {
                // La activa se rellena con el acento
                backgroundColor: active ? colors.accent : colors.surface,
                borderColor: active ? colors.accent : colors.border,
              },
            ]}
          >
            <Text style={{ color: active ? colors.onAccent : colors.text, fontWeight: '600' }}>{cat ?? 'Todos'}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { gap: 8, paddingVertical: 2, paddingRight: 8 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 8, borderWidth: 1 },
});
