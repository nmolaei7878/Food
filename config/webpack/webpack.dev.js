const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const { PATHS, PORT } = require("../paths.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.join(PATHS.OUTPUT_DIR),
    publicPath: "/",
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: PORT,
    devMiddleware: {
      writeToDisk: true,
    },
  },
});
