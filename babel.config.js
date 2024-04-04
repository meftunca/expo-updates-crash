module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // presets: ['module:@react-native/babel-preset'],

    plugins: [
      // '@babel/plugin-proposal-optional-chaining',
    ],
    // env: {
    //   production: {
    //     plugins: ['transform-remove-console'],
    //   },
    // },
  };
};
