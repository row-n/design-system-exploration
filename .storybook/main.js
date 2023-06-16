/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

const config = {
  stories: [
    '../src/**/*?(.stories).mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: (config) => {
    config.plugins = [...config.plugins, new VanillaExtractPlugin()];

    return config;
  },
};
export default config;
