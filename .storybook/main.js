module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register'
  ],
  presets: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        tsDocgenLoaderOptions: {}
      }
    },
    {
      name: '@storybook/addon-docs/preset',
      options: {
        configureJSX: true
      }
    }
  ]
};
