// Configuración de Babel: usa el preset oficial de Expo.
module.exports = function (api) {
  api.cache(true); // guarda la configuración en caché
  return { presets: ['babel-preset-expo'] };
};
