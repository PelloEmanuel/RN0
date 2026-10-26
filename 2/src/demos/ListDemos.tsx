// Demos de la categoría "Listas". Traen su propio scroll.
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, RefreshControl, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { Caption } from './shared';

interface Item {
  id: string;
  title: string;
}

// 30 elementos de ejemplo para FlatList.
const ITEMS: Item[] = Array.from({ length: 30 }, (_, i) => ({ id: String(i), title: `Elemento ${i + 1}` }));

// Datos agrupados para SectionList.
const SECTIONS = [
  { title: 'Frutas', data: ['Manzana', 'Banana', 'Frutilla'] },
  { title: 'Verduras', data: ['Zanahoria', 'Lechuga', 'Tomate'] },
  { title: 'Lácteos', data: ['Leche', 'Queso', 'Yogur'] },
];

// FlatList: dibuja solo lo que se ve en pantalla.
export function FlatListDemo() {
  const { colors } = useTheme();
  return (
    <View style={local.fill}>
      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={[local.row, { color: colors.text, backgroundColor: colors.surfaceAlt, borderColor: colors.border }]}>
            {item.title}
          </Text>
        )}
        ItemSeparatorComponent={() => <View style={local.separator} />}
        ListEmptyComponent={<Text style={{ color: colors.textMuted }}>No hay elementos</Text>}
      />
      <Caption>30 elementos, pero solo se dibujan los visibles.</Caption>
    </View>
  );
}

// SectionList: lista con encabezados por sección.
export function SectionListDemo() {
  const { colors } = useTheme();
  return (
    <View style={local.fill}>
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item) => item}
        renderSectionHeader={({ section }) => (
          <Text style={[local.header, { color: colors.onAccent, backgroundColor: colors.success, borderColor: colors.border }]}>
            {section.title}
          </Text>
        )}
        renderItem={({ item }) => (
          <Text style={[local.row, { color: colors.text, backgroundColor: colors.surfaceAlt, borderColor: colors.border }]}>
            {item}
          </Text>
        )}
        ItemSeparatorComponent={() => <View style={local.separator} />}
        stickySectionHeadersEnabled
      />
    </View>
  );
}

// RefreshControl: arrastrar hacia abajo para actualizar.
export function RefreshControlDemo() {
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  const [count, setCount] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Al salir de la demo, cancela el temporizador pendiente
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  // Simula una carga de 1,5 segundos
  const onRefresh = () => {
    setRefreshing(true);
    timer.current = setTimeout(() => {
      setCount((c) => c + 1);
      setRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      style={local.fill}
      contentContainerStyle={local.pull}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.accent} colors={[colors.accent]} />
      }
    >
      <Text style={{ color: colors.text, fontSize: 22, fontWeight: '800' }}>Actualizaciones: {count}</Text>
      <Caption>Arrastrá hacia abajo (en el celular) para refrescar.</Caption>
    </ScrollView>
  );
}

const local = StyleSheet.create({
  fill: { flex: 1 },
  row: { padding: 14, borderRadius: 12, borderWidth: 1, fontSize: 16, fontWeight: '600', overflow: 'hidden' },
  header: { fontWeight: '800', fontSize: 15, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 10, borderWidth: 1, overflow: 'hidden' },
  separator: { height: 8 },
  pull: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 48 },
});
