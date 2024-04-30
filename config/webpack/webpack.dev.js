const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const { PATHS, PORT } = require("../paths.js");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.join(PATHS.OUTPUT_DIR),
    publicPath: "/",
    clean: true,
  },
  // plugins: [
  //   new InjectManifest({
  //     swSrc: "./src/src-sw.js",
  //     swDest: "sw.js",
  //     mode: "development",
  //     maximumFileSizeToCacheInBytes: 10000000,
  //   }),
  // ],
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
