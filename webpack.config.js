var HtmlWebpackPlugin = require('html-webpack-plugin')
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
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {
        test: /\.scss$/,
        include: /src/,
        loaders: [
        'style',
        'css',
        'autoprefixer?browsers=last 3 versions',
        'sass?outputStyle=expanded'
        ]
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};