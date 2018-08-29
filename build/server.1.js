/* eslint import/no-extraneous-dependencies: ['off'] */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cwd = path.join(__dirname, '../');
const arguments = process.argv.splice(2);
const config = require(path.join(cwd, arguments[0]));
const {PORT, entry} = config;


const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    
    // Add the client which connects to our middleware
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    // useful if you run your app from another point like django
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    // And then the actual application
    (() => {for (const key in entry) return entry[key]})()
  ],
  output: {
      filename: '[name].bundle.js',
      path: path.resolve(cwd, 'dist'),
      publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: '../favicon.ico'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, './'),
          path.join(cwd, 'site'),
          path.join(cwd, 'components'),
          path.join(cwd, 'libs')
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader : 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif)(\?.+)?$/,
        loader : 'url-loader'
      },
      {
        test: /\.md$/,
        loader : 'raw-loader'
      }
    ]
  }
}


const app = express();
const compiler = webpack(devConfig);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

// Serve the files on port.
app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}!`);
});