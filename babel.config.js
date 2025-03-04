module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      "react-native-reanimated/plugin",
      "@babel/plugin-transform-export-namespace-from",
      [
        "module-resolver",
        {
          alias: {
            "^react-native$": "react-native-web",
          },
        },
      ],
    ],
  };
};
