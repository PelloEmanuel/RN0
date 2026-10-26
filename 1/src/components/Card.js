// Tarjeta base: fondo, borde fino y sombra suave.
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

export default function Card({ children, style }) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: colors.surface, borderColor: colors.border, shadowColor: colors.shadow },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
    // Sombra suave (iOS / web) y elevación (Android)
    shadowOpacity: 0.07,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
});
