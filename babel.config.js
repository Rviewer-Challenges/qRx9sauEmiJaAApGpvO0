module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@navigation': './src/navigation',
            '@screens': './src/screens',
          },
        },
      ],
      '@babel/transform-react-jsx-source',
      'babel-plugin-transform-typescript-metadata',
      'inline-dotenv',
      'transform-inline-environment-variables',
    ],
  };
};
