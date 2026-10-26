// Paletas de color. Las dos cumplen la misma interfaz (Palette).

export interface Palette {
  background: string;
  surface: string;
  surfaceAlt: string;
  text: string;
  textMuted: string;
  border: string;
  accent: string;
  accentSoft: string; // versión suave del acento, para fondos
  onAccent: string; // texto sobre el acento
  success: string;
  warning: string;
  shadow: string;
}

// Tema claro: grises azulados y un único acento azul.
export const lightColors: Palette = {
  background: '#F4F6F9',
  surface: '#FFFFFF',
  surfaceAlt: '#EEF2F7',
  text: '#0F1B2D',
  textMuted: '#5A6678',
  border: '#D8DEE8',
  accent: '#1F4FD8',
  accentSoft: '#E6EDFF',
  onAccent: '#FFFFFF',
  success: '#1E8E5A',
  warning: '#C77700',
  shadow: '#0F1B2D',
};

// Tema oscuro: mismo orden, tonos azul noche.
export const darkColors: Palette = {
  background: '#0E141E',
  surface: '#151D2B',
  surfaceAlt: '#1C2638',
  text: '#E8EDF5',
  textMuted: '#93A0B5',
  border: '#263247',
  accent: '#6E9BFF',
  accentSoft: '#1B2A4A',
  onAccent: '#0E141E',
  success: '#4FD18B',
  warning: '#F2B04A',
  shadow: '#000000',
};
