const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addDecoratorsLegacy,
  addBabelPlugin,
} = require('customize-cra');

const path = require('path');

module.exports = {
  webpack: override(
      addDecoratorsLegacy(),
      addBabelPlugin('@babel/plugin-proposal-throw-expressions'),
      addWebpackAlias({
        'components': path.resolve(__dirname, 'src/components'),
        'modules': path.resolve(__dirname, 'src/modules'),
        'assets': path.resolve(__dirname, 'src/assets'),
        'store': path.resolve(__dirname, 'src/store'),
      }),
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      }),
      addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#2BB9F9',
          '@text-color': '#fff',
          '@border-radius-base': '4px',
          '@card-background': 'rgba(0, 0, 0, 0.2)',
          '@card-padding-base': '15px',
          '@card-radius': '6px',
        }
      }),
      (config) => {
        if (process.env.ENV === 'production' || process.env.NODE_ENV === 'production') {
          config.devtool = false;
        }
        return config;
      },
  )
};
