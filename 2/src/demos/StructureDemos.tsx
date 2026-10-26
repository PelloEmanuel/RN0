// Demos de la categoría "Estructura".
import React, { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { Caption, IMAGE_URI, styles as shared } from './shared';

// View: tres cajas dentro de otra, en fila.
export function ViewDemo() {
  const { colors } = useTheme();
  return (
    <View>
      <View style={[local.row, { backgroundColor: colors.surfaceAlt, borderColor: colors.border }]}>
        <View style={[local.box, { backgroundColor: colors.accent, borderColor: colors.border }]} />
        <View style={[local.box, { backgroundColor: colors.warning, borderColor: colors.border }]} />
        <View style={[local.box, { backgroundColor: colors.success, borderColor: colors.border }]} />
      </View>
      <Caption>Tres View dentro de otro View con flexDirection: row.</Caption>
    </View>
  );
}

// ScrollView: caja de alto fijo con contenido más largo.
export function ScrollViewDemo() {
  const { colors } = useTheme();
  return (
    <View>
      <ScrollView
        nestedScrollEnabled
        style={[local.scroll, { backgroundColor: colors.surfaceAlt, borderColor: colors.border }]}
        contentContainerStyle={shared.gap}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <Text key={i} style={{ color: colors.text }}>
            Línea {i + 1}: deslizá para ver más.
          </Text>
        ))}
      </ScrollView>
      <Caption>Caja de alto fijo (140) con contenido más largo.</Caption>
    </View>
  );
}

// KeyboardAvoidingView: se corre cuando aparece el teclado.
export function KeyboardAvoidingViewDemo() {
  const { colors } = useTheme();
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TextInput
        placeholder="Tocá para abrir el teclado"
        placeholderTextColor={colors.textMuted}
        style={[local.input, { color: colors.text, borderColor: colors.border, backgroundColor: colors.surfaceAlt }]}
      />
      <Caption>Útil en pantallas con el campo pegado abajo: evita que el teclado lo tape.</Caption>
    </KeyboardAvoidingView>
  );
}

// StatusBar: muestra u oculta la barra de estado del teléfono.
export function StatusBarDemo() {
  const { colors, isDark } = useTheme();
  const [hidden, setHidden] = useState(false);
  return (
    <View>
      <StatusBar hidden={hidden} barStyle={isDark ? 'light-content' : 'dark-content'} />
      <View style={shared.row}>
        <Switch value={hidden} onValueChange={setHidden} trackColor={{ true: colors.success }} />
        <Text style={{ color: colors.text, fontWeight: '700' }}>Ocultar barra de estado</Text>
      </View>
      <Caption>Se nota en el celular (en la web no hace nada).</Caption>
    </View>
  );
}

// ImageBackground: imagen de fondo con texto encima.
export function ImageBackgroundDemo() {
  return (
    <ImageBackground
      source={{ uri: IMAGE_URI }}
      style={local.bg}
      imageStyle={{ borderRadius: 12 }}
      accessibilityLabel="Paisaje de fondo"
    >
      <Text style={local.bgText}>Texto sobre la imagen</Text>
    </ImageBackground>
  );
}

const local = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12, padding: 12, borderRadius: 12, borderWidth: 1 },
  box: { width: 56, height: 56, borderRadius: 12, borderWidth: 1 },
  scroll: { height: 140, borderRadius: 12, padding: 12, borderWidth: 1 },
  input: { borderWidth: 1, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 10, fontSize: 16 },
  bg: { height: 160, justifyContent: 'flex-end', padding: 12 },
  bgText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    textShadowColor: 'rgba(0,0,0,0.7)',
    textShadowRadius: 6,
  },
});
