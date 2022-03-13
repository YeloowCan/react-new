const path = require('path');
const resolve = link => path.resolve(__dirname, link);

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
      {
        test: /.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.less/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  // 自定义的antd样式
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'static/img/[name].[hash:7][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
};
