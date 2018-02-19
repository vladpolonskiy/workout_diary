/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const {
  HotModuleReplacementPlugin,
  NamedModulesPlugin,
  DefinePlugin,
  NoEmitOnErrorsPlugin,
} = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: '3000',
    historyApiFallback: true,
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      baseURL: "'http://localhost:3000'",
    }),
  ],
});
