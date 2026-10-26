// Dice qué tan ancha es la pantalla, para adaptar el diseño.
import { useWindowDimensions } from 'react-native';

export default function useBreakpoint() {
  const { width } = useWindowDimensions();
  return {
    width,
    isWide: width >= 900, // compu o tablet grande
    isMedium: width >= 600, // tablet o celular girado
  };
}
