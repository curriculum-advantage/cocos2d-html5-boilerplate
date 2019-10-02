const { join } = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const { dependencies } = require('../../package.json');

const sourcePath = join(`${__dirname}/../../src`);

module.exports = {
  entry: { main: './src/index.js', vendor: Object.keys(dependencies) },
  optimization: { splitChunks: { name: 'vendor', minChunks: 2 } },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: sourcePath,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: 2,
                targets: {
                  ie: 11,
                },
              },
            ],
          ],
          plugins: ['@babel/plugin-proposal-class-properties', 'lodash'],
        },
      },
    ],
  },
  plugins: [new LodashModuleReplacementPlugin()],
};
