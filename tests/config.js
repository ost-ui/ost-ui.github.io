const path = require('path');
const webpack = require('webpack');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
module.exports = {
  mode: 'none',
  module: {
    rules: [
      // {
      //   test: /\.js|\.jsx$/,
      //   use: {
      //     loader: 'istanbul-instrumenter-loader',
      //     options: { 
      //       esModules: true,
      //       compact: false
      //     }
      //   },
      //   enforce: 'pre',
      //   exclude: /node_modules|\.spec\.js$/,
      // },
      {
        test: /\.js|\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['istanbul']
          }
        },
        include: [
          path.join(__dirname, '../components/'),
          path.join(__dirname, '../tests/specs/'),
          path.join(__dirname, '../tests/utils/')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
        loader: 'file-loader?name=static/media/[name].[hash:12].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)(\?.+)?$/,
        loader: 'url-loader?name=static/media/[name].[hash:12].[ext]&limit=25000'
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../components/')
    }
  },
  plugins: [
    new ProgressBarWebpackPlugin()
  ]
}
