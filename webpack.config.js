'use strict';
const HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  plugins: [new HtmlWebpackPlugin()],
  watch: true,

  devtool: "source-map",

  module: {}
};
