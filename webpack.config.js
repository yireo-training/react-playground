const path = require("path");
const net = require("net");

const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

var config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  devServer: {
    overlay: true,
    historyApiFallback: true
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.gql$/,
        exclude: /node_modules/,
        use: [{ loader: "graphql-tag/loader" }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body"
    }),
    new HardSourceWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ]
};

module.exports = config;
