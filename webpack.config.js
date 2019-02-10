const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const WebpackAssetsManifest = require('webpack-assets-manifest')

const isProduction = process.env.NODE_ENV === 'production'

const webpackConfig = {
  entry: './frontend/index.tsx',
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? '' : 'source-map',
  output: {
    filename: isProduction ? 'bundle.[hash].js' : 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      frontend: path.resolve(__dirname, './frontend/'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: isProduction ? '[name].[hash].[ext]' : '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackAssetsManifest({
      // Options go here
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
    new Dotenv({ path: `./.env.${process.env.NODE_ENV || 'development'}` }),
  ],
}

module.exports = webpackConfig
