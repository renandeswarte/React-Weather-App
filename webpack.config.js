var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackNotifierPlugin = require('webpack-notifier')
var webpack = require ('webpack')

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    'babel-polyfill', 
    'webpack-dev-server/client?http://localhost:8080',
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
        'style',
        'css',
        'autoprefixer?browsers=last 3 versions',
        'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192',
          'img'
        ]
      },
      {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new WebpackNotifierPlugin({title: 'Webpack'}),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      }
    })
  ]
};