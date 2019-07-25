const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry:{
    app: './src/index.js',
    print: './src/print.js'
  }, 
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist'
  },
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
      rules: [
          {
            test: /\.scss$/,
            use: [ 'style-loader','css-loader',
             'sass-loader']
          
          },
          {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                } 
            }]
        }
      ]
  }

};