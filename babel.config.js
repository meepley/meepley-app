module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ['./src'],
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx'
          ],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@navigation": "./src/navigation",
            "@theme": "./src/theme",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@utils": "./src/utils",
            "@config": "./src/utils/config",
            "@hooks": "./src/utils/hooks",
            "@ts": "./src/ts"
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
