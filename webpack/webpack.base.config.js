const path = require('path');
const resolve = (link) => path.resolve(__dirname, link);

module.exports = {
  entry: path.join(__dirname, '../src/index.tsx'), // 入口文件，/src/index.js
  module: {
    rules: [
      {
        test: /.(j|t)sx?$/,
        use: ['babel-loader'],
        include: [resolve('../src')],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
};
