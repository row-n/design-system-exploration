const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = function override(config) {
  const newConfig = config;
  newConfig.plugins = [new VanillaExtractPlugin()].concat(newConfig.plugins);

  return newConfig;
};
