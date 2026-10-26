// Demos de la categoría "Texto e imagen".
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { Caption, IMAGE_URI } from './shared';

// Text: títulos, texto anidado y texto cortado.
export function TextDemo() {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={{ color: colors.text, fontSize: 24, fontWeight: '800' }}>Título en negrita</Text>
      <Text style={{ color: colors.text, fontSize: 16 }}>
        Texto normal con una parte{' '}
        <Text style={{ fontWeight: '800', color: colors.accent }}>anidada</Text>.
      </Text>
      <Text numberOfLines={1} style={{ color: colors.textMuted, marginTop: 6 }}>
        Con numberOfLines=1 este texto largo se corta con puntos suspensivos al final de la línea.
      </Text>
      <Caption>Todo texto de la app debe ir dentro de un Text.</Caption>
    </View>
  );
}

// Image: imagen de internet con bordes.
export function ImageDemo() {
  const { colors } = useTheme();
  return (
    <View>
      <Image
        source={{ uri: IMAGE_URI }}
        style={[local.image, { borderColor: colors.border }]}
        resizeMode="cover"
        accessibilityLabel="Paisaje de montaña"
      />
      <Caption>Las imágenes de internet necesitan width y height.</Caption>
    </View>
  );
}

const local = StyleSheet.create({
  image: { width: '100%', height: 160, borderRadius: 12, borderWidth: 1 },
});
