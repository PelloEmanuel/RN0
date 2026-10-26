# Proyecto 2 – Catálogo de componentes nativos (React Native + Expo + TypeScript)

App que muestra los componentes nativos de React Native, para qué sirve cada uno y una demo interactiva.

## Ejecutar
```bash
npm install
npx expo install --fix   # alinea versiones con tu SDK de Expo
npm start
npm run typecheck        # verifica los tipos
```

## Estructura
```
App.tsx                     Raíz: tema, encabezado y pantalla (catálogo o detalle)
index.ts / babel.config.js  Registro de la app y configuración de Babel
src/
  types/index.ts            Category y ComponentInfo
  data/components.ts        Catálogo: una ficha por componente
  hooks/useBreakpoint.ts    Ancho de pantalla y columnas de la grilla
  hooks/useFilteredComponents.ts  Búsqueda y filtro
  theme/                    Paletas, useTheme() y color por categoría
  components/               Card, Button, SectionLabel, Header, ThemeToggle, chips, tarjeta, código
  screens/                  CatalogScreen y DetailScreen
  demos/                    Demos agrupadas por categoría
```

## Diseño y ancho
Estilo sobrio: grises azulados, un solo acento, bordes de 1 px y sombras suaves. La app usa todo el
ancho de la ventana (sin máximo); el scroll vive dentro de cada pantalla, por eso su barra queda
en el borde. En pantallas anchas el detalle se parte en dos columnas.

## Componentes incluidos (19)
| Categoría | Componentes |
|---|---|
| Estructura | View, ScrollView, KeyboardAvoidingView, StatusBar, ImageBackground |
| Texto e imagen | Text, Image |
| Entradas | TextInput, Switch, Button |
| Listas | FlatList, SectionList, RefreshControl |
| Interacción | Pressable, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback |
| Feedback | ActivityIndicator, Modal |

`SafeAreaView` de React Native está deprecado; se usa el de `react-native-safe-area-context`.

## Cómo agregar un componente
1. Crear su demo en `src/demos/<Categoria>Demos.tsx`.
2. Agregar su ficha en `src/data/components.ts`.
3. Si la demo es una lista con scroll propio, marcar `ownScroll: true`.
4. Anotar el cambio en `CHANGELOG.md`.

## Decisiones
- **Escalabilidad:** el catálogo es un arreglo de datos; las pantallas no cambian al sumar componentes.
- **Tipado:** `strict: true`; todas las props e interfaces están tipadas.
- **Usabilidad:** tema claro/oscuro, grilla adaptable, áreas táctiles amplias y etiquetas de accesibilidad.
- **Comentarios:** todos los archivos de código llevan comentarios simples y cortos.
- **Sin base de datos:** el trabajo no requiere persistencia, por lo que no aplica el apartado BBDD.

## Si aparece "Cannot find module 'babel-preset-expo'"
```bash
rmdir /s /q node_modules   # (Windows) o rm -rf node_modules
del package-lock.json
npm install
npx expo install --fix
npx expo start -c          # -c limpia la caché de Metro
```
