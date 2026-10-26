// Catálogo de componentes nativos: una ficha por componente.
// Para sumar uno: crear su demo en src/demos y agregar una ficha aquí.
import { ComponentInfo } from '../types';
import {
  ImageBackgroundDemo,
  KeyboardAvoidingViewDemo,
  ScrollViewDemo,
  StatusBarDemo,
  ViewDemo,
} from '../demos/StructureDemos';
import { ImageDemo, TextDemo } from '../demos/TextImageDemos';
import { ButtonDemo, SwitchDemo, TextInputDemo } from '../demos/InputDemos';
import { FlatListDemo, RefreshControlDemo, SectionListDemo } from '../demos/ListDemos';
import {
  PressableDemo,
  TouchableHighlightDemo,
  TouchableOpacityDemo,
  TouchableWithoutFeedbackDemo,
} from '../demos/TouchDemos';
import { ActivityIndicatorDemo, ModalDemo } from '../demos/FeedbackDemos';

// Lista completa que usa el catálogo.
export const COMPONENTS: ComponentInfo[] = [
  // ----- Estructura -----
  {
    id: 'view',
    name: 'View',
    category: 'Estructura',
    summary: 'El contenedor básico, equivalente a un div.',
    usage: 'Agrupar y ordenar otros componentes con Flexbox, fondos, bordes y sombras.',
    code: '<View style={{ flexDirection: "row" }}>\n  <View />\n  <View />\n</View>',
    Demo: ViewDemo,
  },
  {
    id: 'scrollview',
    name: 'ScrollView',
    category: 'Estructura',
    summary: 'Contenedor con desplazamiento.',
    usage: 'Pantallas o bloques cuyo contenido es corto y conocido de antemano. Para muchos datos usá FlatList.',
    code: '<ScrollView>\n  <Text>Contenido largo</Text>\n</ScrollView>',
    Demo: ScrollViewDemo,
  },
  {
    id: 'keyboardavoidingview',
    name: 'KeyboardAvoidingView',
    category: 'Estructura',
    summary: 'Contenedor que se ajusta cuando aparece el teclado.',
    usage: 'Formularios y chats, para que el teclado no tape los campos de texto.',
    code: '<KeyboardAvoidingView behavior="padding">\n  <TextInput />\n</KeyboardAvoidingView>',
    Demo: KeyboardAvoidingViewDemo,
  },
  {
    id: 'statusbar',
    name: 'StatusBar',
    category: 'Estructura',
    summary: 'Controla la barra de estado del dispositivo.',
    usage: 'Cambiar el color de los íconos u ocultar la barra según el tema o la pantalla.',
    code: '<StatusBar barStyle="light-content" hidden={false} />',
    Demo: StatusBarDemo,
  },
  {
    id: 'imagebackground',
    name: 'ImageBackground',
    category: 'Estructura',
    summary: 'Imagen de fondo que admite contenido encima.',
    usage: 'Portadas, tarjetas con foto y encabezados con texto superpuesto.',
    code: '<ImageBackground source={{ uri }} style={{ height: 160 }}>\n  <Text>Encima</Text>\n</ImageBackground>',
    Demo: ImageBackgroundDemo,
  },
  // ----- Texto e imagen -----
  {
    id: 'text',
    name: 'Text',
    category: 'Texto e imagen',
    summary: 'Muestra texto.',
    usage: 'Todo texto visible debe ir dentro de un Text. Se puede anidar para mezclar estilos.',
    code: '<Text style={{ fontWeight: "700" }}>Hola</Text>',
    Demo: TextDemo,
  },
  {
    id: 'image',
    name: 'Image',
    category: 'Texto e imagen',
    summary: 'Muestra imágenes locales o de internet.',
    usage: 'Fotos, íconos y avatares. Siempre agregá accessibilityLabel.',
    code: '<Image source={{ uri }} style={{ width: 200, height: 100 }} />',
    Demo: ImageDemo,
  },
  // ----- Entradas -----
  {
    id: 'textinput',
    name: 'TextInput',
    category: 'Entradas',
    summary: 'Campo para que la persona escriba.',
    usage: 'Formularios, búsquedas y chats. Se controla con value y onChangeText.',
    code: '<TextInput value={v} onChangeText={setV} placeholder="Nombre" />',
    Demo: TextInputDemo,
  },
  {
    id: 'switch',
    name: 'Switch',
    category: 'Entradas',
    summary: 'Interruptor de encendido y apagado.',
    usage: 'Opciones de sí/no, como activar notificaciones o el modo oscuro.',
    code: '<Switch value={on} onValueChange={setOn} />',
    Demo: SwitchDemo,
  },
  {
    id: 'button',
    name: 'Button',
    category: 'Entradas',
    summary: 'Botón simple con aspecto nativo.',
    usage: 'Acciones rápidas sin diseño propio. Tiene pocas opciones de estilo.',
    code: '<Button title="Enviar" onPress={() => {}} />',
    Demo: ButtonDemo,
  },
  // ----- Listas -----
  {
    id: 'flatlist',
    name: 'FlatList',
    category: 'Listas',
    summary: 'Lista eficiente para muchos elementos.',
    usage: 'Listados largos o dinámicos. Solo dibuja lo que se ve en pantalla.',
    code: '<FlatList data={items} keyExtractor={i => i.id} renderItem={...} />',
    Demo: FlatListDemo,
    ownScroll: true,
  },
  {
    id: 'sectionlist',
    name: 'SectionList',
    category: 'Listas',
    summary: 'Lista dividida en secciones con encabezado.',
    usage: 'Datos agrupados, como contactos por letra o productos por categoría.',
    code: '<SectionList sections={s} renderSectionHeader={...} renderItem={...} />',
    Demo: SectionListDemo,
    ownScroll: true,
  },
  {
    id: 'refreshcontrol',
    name: 'RefreshControl',
    category: 'Listas',
    summary: 'Gesto de arrastrar para actualizar.',
    usage: 'Se pasa a un ScrollView o FlatList para recargar los datos.',
    code: '<ScrollView refreshControl={\n  <RefreshControl refreshing={r} onRefresh={load} />\n} />',
    Demo: RefreshControlDemo,
    ownScroll: true,
  },
  // ----- Interacción -----
  {
    id: 'pressable',
    name: 'Pressable',
    category: 'Interacción',
    summary: 'Detecta toques y expone el estado "pressed".',
    usage: 'El reemplazo moderno y recomendado para crear botones personalizados.',
    code: '<Pressable onPress={fn} style={({ pressed }) => [...]} />',
    Demo: PressableDemo,
  },
  {
    id: 'touchableopacity',
    name: 'TouchableOpacity',
    category: 'Interacción',
    summary: 'Se atenúa al tocarlo.',
    usage: 'Botones y tarjetas con una respuesta visual simple.',
    code: '<TouchableOpacity activeOpacity={0.4} onPress={fn} />',
    Demo: TouchableOpacityDemo,
  },
  {
    id: 'touchablehighlight',
    name: 'TouchableHighlight',
    category: 'Interacción',
    summary: 'Muestra un color de fondo al tocarlo.',
    usage: 'Filas de listas y menús donde se quiere resaltar la fila presionada.',
    code: '<TouchableHighlight underlayColor="#ccc" onPress={fn} />',
    Demo: TouchableHighlightDemo,
  },
  {
    id: 'touchablewithoutfeedback',
    name: 'TouchableWithoutFeedback',
    category: 'Interacción',
    summary: 'Detecta toques sin ningún efecto visual.',
    usage: 'Por ejemplo, cerrar el teclado al tocar fuera. Requiere un único hijo.',
    code: '<TouchableWithoutFeedback onPress={fn}>\n  <View />\n</TouchableWithoutFeedback>',
    Demo: TouchableWithoutFeedbackDemo,
  },
  // ----- Feedback -----
  {
    id: 'activityindicator',
    name: 'ActivityIndicator',
    category: 'Feedback',
    summary: 'Rueda de carga.',
    usage: 'Avisar que hay una operación en curso, como una consulta a un servidor.',
    code: '<ActivityIndicator size="large" color="#0f8f83" />',
    Demo: ActivityIndicatorDemo,
  },
  {
    id: 'modal',
    name: 'Modal',
    category: 'Feedback',
    summary: 'Ventana que se muestra sobre la pantalla.',
    usage: 'Confirmaciones, formularios cortos y mensajes importantes.',
    code: '<Modal visible={open} transparent animationType="fade" />',
    Demo: ModalDemo,
  },
];
