// Demos de la categoría "Feedback": indicadores y ventanas emergentes.
import React, { useState } from 'react';
import { ActivityIndicator, Button, Modal, StyleSheet, Switch, Text, View } from 'react-native';
import Card from '../components/Card';
import { useTheme } from '../theme/ThemeContext';
import { Caption, styles as shared } from './shared';

// ActivityIndicator: rueda de carga que se puede pausar.
export function ActivityIndicatorDemo() {
  const { colors } = useTheme();
  const [animating, setAnimating] = useState(true);
  return (
    <View style={shared.gap}>
      <View style={shared.row}>
        <ActivityIndicator size="small" color={colors.accent} animating={animating} />
        <ActivityIndicator size="large" color={colors.accent} animating={animating} />
      </View>
      <View style={shared.row}>
        <Switch value={animating} onValueChange={setAnimating} trackColor={{ true: colors.success }} />
        <Text style={{ color: colors.text, fontWeight: '700' }}>Animando</Text>
      </View>
      <Caption>Avisa que algo se está cargando.</Caption>
    </View>
  );
}

// Modal: ventana que se dibuja sobre toda la pantalla.
export function ModalDemo() {
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <Button title="Abrir modal" color={colors.accent} onPress={() => setVisible(true)} />
      <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}>
        {/* Fondo oscuro detrás del cuadro */}
        <View style={local.backdrop}>
          <Card style={local.dialog}>
            <Text style={[local.title, { color: colors.text }]}>Ventana modal</Text>
            <Text style={{ color: colors.textMuted }}>Se dibuja por encima de toda la pantalla.</Text>
            <Button title="Cerrar" color={colors.accent} onPress={() => setVisible(false)} />
          </Card>
        </View>
      </Modal>
      <Caption>Útil para confirmaciones y avisos importantes.</Caption>
    </View>
  );
}

const local = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center', padding: 24 },
  dialog: { padding: 20, gap: 12, width: '100%', maxWidth: 420 },
  title: { fontSize: 22, fontWeight: '800' },
});
