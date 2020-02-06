const path = require('path');

const src_dir = path.join(__dirname, '/client');
const dist_dir = path.join(__dirname, 'client/dist');

module.exports = {
  entry: path.join(src_dir, 'index.jsx'),
  output: {
    path: dist_dir,
    filename: 'bundle.js'
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
  }
};
