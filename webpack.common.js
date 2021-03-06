const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = { // skipcq: JS-0125
  entry: path.resolve(__dirname, 'src/main.js'), // skipcq: JS-0125
  output: {
    path: path.resolve(__dirname, 'dist'), // skipcq: JS-0125
    filename: '[name].[hash].js'
  },
  resolve: {
    alias: {
      Vue: path.resolve(__dirname, './src/vue'), // skipcq: JS-0125
      Config: path.resolve(__dirname, './src/config'), // skipcq: JS-0125
      Img: path.resolve(__dirname, './src/img') // skipcq: JS-0125
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.vue$/i,
        use: 'vue-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.pug$/i,
        use: 'pug-plain-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.js$/i,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: 'file-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/main.html',
      filename: './index.html'
    }),
    new VueLoaderPlugin()
  ]
}
