# Proyecto 1 – Hola Mundo (React Native + Expo)

Pantalla de "Hola Mundo" y una segunda pestaña con estilos. Pestañas arriba, modo claro/oscuro en el encabezado.

## Ejecutar
```bash
npm install
npx expo install --fix
npm start          # con "npm start -- -c" limpia la caché
```

## Estructura
```
App.js                    Raíz: tema, encabezado, pestañas y pantalla activa
index.js                  Registra la app
babel.config.js           Preset de Babel para Expo
src/
  theme/colors.js         Paletas clara y oscura
  theme/ThemeContext.js   Proveedor y hook useTheme()
  hooks/useBreakpoint.js  Ancho de pantalla (wide / medium)
  components/Card.js      Tarjeta base (borde fino + sombra suave)
  components/Button.js    Botón primary / outline
  components/Header.js    Logo, título y botón de tema
  components/TopTabs.js   Pestañas superiores
  components/ThemeToggle.js  Botón claro/oscuro
  components/Page.js      Contenedor con scroll a ancho completo
  components/SectionLabel.js  Rótulo de sección
  components/StyleCard.js Tarjeta de ejemplo
  screens/HolaMundoScreen.js  Pestaña 1
  screens/EstilosScreen.js    Pestaña 2
```

## Diseño
Estilo sobrio: grises azulados, un solo color de acento, bordes de 1 px, esquinas de 8 a 12 px y
sombras suaves. Los colores salen siempre de `useTheme()`; nunca están escritos en las pantallas.

## Cómo agregar una pestaña
1. Crear `src/screens/NuevaScreen.js` usando `<Page>`.
2. Sumarla a `TABS` y a `SCREENS` en `App.js`.
3. Anotar el cambio en `CHANGELOG.md`.

## Si aparece "Cannot find module 'babel-preset-expo'"
Borrar `node_modules` y `package-lock.json`, correr `npm install` y luego `npx expo start -c`.
