// Pantalla principal: búsqueda, filtros y grilla de componentes (ancho completo).
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import CategoryChips from '../components/CategoryChips';
import Card from '../components/Card';
import ComponentCard from '../components/ComponentCard';
import { COMPONENTS } from '../data/components';
import useBreakpoint from '../hooks/useBreakpoint';
import { useFilteredComponents } from '../hooks/useFilteredComponents';
import { useTheme } from '../theme/ThemeContext';
import { Category, ComponentInfo } from '../types';

interface Props {
  onSelect: (item: ComponentInfo) => void;
}

export default function CatalogScreen({ onSelect }: Props) {
  const { colors } = useTheme();
  const { columns, isWide } = useBreakpoint();
  const [query, setQuery] = useState(''); // texto de búsqueda
  const [category, setCategory] = useState<Category | null>(null); // filtro activo
  const items = useFilteredComponents(query, category);

  // Rellena la última fila con huecos vacíos para que las tarjetas no se estiren
  const data: (ComponentInfo | null)[] = [...items];
  while (data.length % columns !== 0) data.push(null);

  // Parte de arriba de la lista: título, buscador y filtros
  const header = (
    <View style={styles.header}>
      <View style={styles.heading}>
        <Text style={[styles.title, { color: colors.text }]}>Componentes nativos</Text>
        <Text style={{ color: colors.textMuted, fontSize: 16 }}>
          {COMPONENTS.length} componentes de React Native. Elegí uno para ver qué es, para qué sirve y probarlo.
        </Text>
      </View>

      {/* Buscador */}
      <Card>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Buscar componente…"
          placeholderTextColor={colors.textMuted}
          autoCorrect={false}
          autoCapitalize="none"
          accessibilityLabel="Buscar componente"
          style={[styles.search, { color: colors.text }]}
        />
      </Card>

      <CategoryChips selected={category} onSelect={setCategory} />
    </View>
  );

  return (
    <FlatList
      key={columns} // cambia la key al cambiar las columnas (lo exige FlatList)
      data={data}
      numColumns={columns}
      keyExtractor={(item, i) => item?.id ?? `hueco-${i}`}
      keyboardShouldPersistTaps="handled"
      style={styles.list}
      contentContainerStyle={[styles.content, isWide && styles.contentWide]}
      ListHeaderComponent={header}
      ListEmptyComponent={
        <Text style={[styles.empty, { color: colors.textMuted }]}>
          Sin resultados. Probá otro nombre o elegí "Todos".
        </Text>
      }
      columnWrapperStyle={columns > 1 ? styles.column : undefined}
      renderItem={({ item }) =>
        item ? <ComponentCard item={item} onPress={onSelect} /> : <View style={styles.gap} />
      }
    />
  );
}

const styles = StyleSheet.create({
  list: { flex: 1 },
  content: { padding: 16, paddingBottom: 48, gap: 16 },
  contentWide: { padding: 32, paddingBottom: 56 },
  header: { gap: 16, marginBottom: 8 },
  heading: { gap: 6 },
  title: { fontSize: 32, fontWeight: '800', letterSpacing: -0.5 },
  search: { paddingHorizontal: 16, paddingVertical: 12, fontSize: 16 },
  column: { gap: 16 },
  gap: { flex: 1 },
  empty: { textAlign: 'center', marginTop: 32, fontSize: 16 },
});
