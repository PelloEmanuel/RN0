// Demos de la categoría "Entradas".
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { Caption, styles as shared } from './shared';

// TextInput: lo que se escribe se guarda en un estado.
export function TextInputDemo() {
  const { colors } = useTheme();
  const [value, setValue] = useState('');
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Escribí tu nombre"
        placeholderTextColor={colors.textMuted}
        autoCapitalize="words"
        style={[local.input, { color: colors.text, borderColor: colors.border, backgroundColor: colors.surfaceAlt }]}
      />
      <Caption>{value ? `Hola, ${value}` : 'Lo que escribas se guarda en un estado de React.'}</Caption>
    </View>
  );
}

// Switch: interruptor de sí/no.
export function SwitchDemo() {
  const { colors } = useTheme();
  const [on, setOn] = useState(true);
  return (
    <View>
      <View style={shared.row}>
        <Switch value={on} onValueChange={setOn} trackColor={{ true: colors.success }} />
        <Text style={{ color: colors.text, fontWeight: '700' }}>Avisos {on ? 'activados' : 'desactivados'}</Text>
      </View>
      <Caption>Interruptor de dos estados.</Caption>
    </View>
  );
}

// Button: botón básico con aspecto nativo.
export function ButtonDemo() {
  const { colors } = useTheme();
  return (
    <View style={shared.gap}>
      <Button title="Mostrar aviso" color={colors.accent} onPress={() => Alert.alert('Botón', '¡Presionaste el Button!')} />
      <Button title="Deshabilitado" disabled onPress={() => undefined} />
      <Caption>Tiene pocas opciones de estilo. Para botones propios usá Pressable.</Caption>
    </View>
  );
}

const local = StyleSheet.create({
  input: { borderWidth: 1, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 10, fontSize: 16 },
});
