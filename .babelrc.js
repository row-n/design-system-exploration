module.exports = api => {
  api.cache(true);
  return {
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
    ],
    plugins: [
      "@vanilla-extract/babel-plugin",
    ]
  }
};
