// Demos de la categoría "Interacción": todo lo que reacciona al toque.
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { Caption } from './shared';

// Pressable: permite cambiar el estilo mientras se presiona.
export function PressableDemo() {
  const { colors } = useTheme();
  const [count, setCount] = useState(0);
  return (
    <View>
      <Pressable
        onPress={() => setCount((c) => c + 1)}
        accessibilityRole="button"
        style={({ pressed }) => [
          local.btn,
          { backgroundColor: colors.accent, borderColor: colors.border, opacity: pressed ? 0.6 : 1 },
        ]}
      >
        <Text style={[local.btnText, { color: colors.onAccent }]}>Toques: {count}</Text>
      </Pressable>
      <Caption>El estilo cambia según el estado "pressed".</Caption>
    </View>
  );
}

// TouchableOpacity: se vuelve transparente al tocarlo.
export function TouchableOpacityDemo() {
  const { colors } = useTheme();
  const [count, setCount] = useState(0);
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => setCount((c) => c + 1)}
        style={[local.btn, { backgroundColor: colors.warning, borderColor: colors.border }]}
      >
        <Text style={[local.btnText, { color: colors.onAccent }]}>Toques: {count}</Text>
      </TouchableOpacity>
      <Caption>Se atenúa mientras lo presionás.</Caption>
    </View>
  );
}

// TouchableHighlight: muestra un color de fondo al presionar.
export function TouchableHighlightDemo() {
  const { colors } = useTheme();
  const [count, setCount] = useState(0);
  return (
    <View>
      <TouchableHighlight
        underlayColor={colors.success}
        onPress={() => setCount((c) => c + 1)}
        style={[local.btn, { backgroundColor: colors.surfaceAlt, borderColor: colors.border }]}
      >
        <Text style={[local.btnText, { color: colors.text }]}>Toques: {count}</Text>
      </TouchableHighlight>
      <Caption>Muestra un color (underlayColor) al presionar.</Caption>
    </View>
  );
}

// TouchableWithoutFeedback: detecta el toque pero no cambia nada visual.
export function TouchableWithoutFeedbackDemo() {
  const { colors } = useTheme();
  const [msg, setMsg] = useState('Todavía no tocaste la caja');
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setMsg('¡Toque detectado sin efecto visual!')}>
        <View style={[local.box, { borderColor: colors.border }]}>
          <Text style={{ color: colors.text, fontWeight: '700' }}>{msg}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Caption>Requiere un único hijo.</Caption>
    </View>
  );
}

const local = StyleSheet.create({
  btn: { paddingVertical: 14, borderRadius: 12, borderWidth: 1, alignItems: 'center' },
  btnText: { fontWeight: '800', fontSize: 16 },
  box: { padding: 24, borderWidth: 1, borderStyle: 'dashed', borderRadius: 12, alignItems: 'center' },
});
