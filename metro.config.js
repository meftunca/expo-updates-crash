
// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const {mergeConfig} = require('@react-native/metro-config');
const {getDefaultConfig} = require('expo/metro-config');
const config = {
  
  resolver: {
    // extraNodeModules: new Proxy(
    //   {},
    //   {get: (_, name) => path.resolve('.', 'node_modules', name)},
    // ),
    // // /dist\/.*/
    // blacklistRE: getBlacklist(),
    sourceExts: [
      'js', // note this has to be defined first or you get an error
      'json',
      'jsx',
      'mjs',
      'cjs',
      // required because the react-native cli ignores `resolverMainFields`
      'ts',
      'tsx',
      'ttf',
    ],
  },
};
module.exports = mergeConfig(getDefaultConfig(__dirname), config);
