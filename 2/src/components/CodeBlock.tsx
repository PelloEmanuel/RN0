// Muestra un fragmento de código con letra monoespaciada.
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import Card from './Card';

export default function CodeBlock({ code }: { code: string }) {
  const { colors } = useTheme();
  return (
    <Card style={{ backgroundColor: colors.surfaceAlt }}>
      {/* Scroll horizontal por si la línea es larga */}
      <ScrollView horizontal contentContainerStyle={styles.content}>
        <Text selectable style={[styles.code, { color: colors.text }]}>
          {code}
        </Text>
      </ScrollView>
    </Card>
  );
}

const styles = StyleSheet.create({
  content: { padding: 14 },
  code: { fontFamily: 'monospace', fontSize: 13 },
});
