// Pestañas en la parte superior, con línea de color debajo de la activa.
// Recibe la lista de pestañas, la activa y qué hacer al cambiar.
import { Pressable, StyleSheet, Text, View } from 'react-native';
import useBreakpoint from '../hooks/useBreakpoint';
import { useTheme } from '../theme/ThemeContext';

export default function TopTabs({ tabs, active, onChange }) {
  const { colors } = useTheme();
  const { isMedium } = useBreakpoint();

  return (
    <View
      accessibilityRole="tablist"
      style={[styles.bar, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}
    >
      {tabs.map((tab) => {
        const selected = tab.key === active;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onChange(tab.key)}
            accessibilityRole="tab"
            accessibilityState={{ selected }}
            // En celular, cada pestaña ocupa la mitad del ancho
            style={[
              styles.tab,
              !isMedium && styles.tabFlex,
              { borderBottomColor: selected ? colors.accent : 'transparent' },
            ]}
          >
            <Text style={[styles.label, { color: selected ? colors.accent : colors.textMuted }]}>
              {tab.icon}  {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { flexDirection: 'row', paddingHorizontal: 16, borderBottomWidth: 1 },
  tab: { paddingVertical: 14, paddingHorizontal: 20, borderBottomWidth: 3, alignItems: 'center' },
  tabFlex: { flex: 1 },
  label: { fontSize: 15, fontWeight: '600' },
});
