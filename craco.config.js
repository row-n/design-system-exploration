const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // This `configure` setup is required to create a production build as CRA doesn't allow you to import files outside the src/ directory
      // Reference: https://sandroroth.com/blog/vanilla-extract-cra

      const moduleScopePlugin = webpackConfig.resolve.plugins.find(
        (plugin) => plugin instanceof ModuleScopePlugin
      );
      moduleScopePlugin.allowedPaths.push(
        path.resolve(
          __dirname,
          'node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.2.0_@types+node@18.11.18_webpack@5.75.0/node_modules/@vanilla-extract/webpack-plugin'
        )
      );

      return webpackConfig;
    },
    plugins: {
      add: [new VanillaExtractPlugin()],
    },
  },
};
