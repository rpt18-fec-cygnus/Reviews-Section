const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

const src_dir = path.join(__dirname, '/client');
const dist_dir = path.join(__dirname, 'client/dist');

module.exports = {
  mode: 'production',
  entry: path.join(src_dir, 'index.jsx'),
  output: {
    path: dist_dir,
    filename: 'minBundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: src_dir,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [new CompressionPlugin()]
};
