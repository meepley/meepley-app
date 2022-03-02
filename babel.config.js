module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./assets",
            "@components": "./components",
            "@navigation": "./navigation",
            "@theme": "./theme",
            "@screens": "./screens",
            "@services": "./services",
            "@utils": "./utils",
            "@config": "./utils/config",
            "@hooks": "./utils/hooks",
            "@ts": "./ts"
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
