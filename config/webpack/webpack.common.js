const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { PATHS } = require("../paths");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(PATHS.APP_DIR, "index.tsx"),
  
  output: {
    path: path.join(PATHS.OUTPUT_DIR),
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: [".tsx", ".ts", ".jsx", ".js", ".css", ".scss"],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.png",
      manifest: "./public/manifest.json",
      filename: "index.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: "./public/offline.html",
      filename: "offline.html",
    }),
    new Dotenv({
      path: `${PATHS.ROOT_DIR}/.env`,
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify("development"),
    }),
    new WebpackPwaManifest({
      name: "Food",
      short_name: "FoodMood",
      background_color: "#ffffff",
      theme_color: "#F535AA",
      icons: [
        {
          src: "./public/icon.png",
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
      ],
    }),
  ],
    stats: {
    colors: true, 
    entrypoints: true, 
    modules: false,
    chunks: true, 
    chunkGroups: false, 
    chunkModules: false,
    chunkOrigins: false, 
    children: false,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader","postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|ico|json)$/i,
        exclude: /node_modules/,
        use: "file-loader?name=[name].[ext]",
      },
    ],
  },
}
