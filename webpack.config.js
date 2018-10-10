const webpack = require('webpack');
var path = require('path');
const nodeExternals = require('webpack-node-externals');
const packageJson = require('./package.json');
const NodemonPlugin = require('nodemon-webpack-plugin')

const DEBUG = process.env.NODE_ENV !== 'production';

const plugins = [];
if(DEBUG) {
  plugins.push(new NodemonPlugin({
    nodeArgs: "--inspect"
  }));
}
module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'backend.js'
  },
  optimization: {
    minimize: !DEBUG
  },
  devtool: "source-map",
  module: {
    "rules": [
      {
        "enforce": "pre",
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": "eslint-loader"
      },
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "env"
            ]
          }
        }
      }
    ]
  },
  plugins
}
