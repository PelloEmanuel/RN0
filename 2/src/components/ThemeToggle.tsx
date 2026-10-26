// Botón para cambiar entre modo claro y oscuro.
// En pantallas angostas muestra solo el ícono.
import React from 'react';
import useBreakpoint from '../hooks/useBreakpoint';
import { useTheme } from '../theme/ThemeContext';
import Button from './Button';

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();
  const { isMedium } = useBreakpoint();

  const icon = isDark ? '☀️' : '🌙';
  const text = isDark ? 'Modo claro' : 'Modo oscuro';

  return (
    <Button
      variant="outline"
      label={isMedium ? `${icon}  ${text}` : icon}
      accessibilityLabel={`Cambiar a ${text.toLowerCase()}`}
      onPress={toggle}
    />
  );
}
