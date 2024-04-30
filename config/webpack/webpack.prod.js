const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PATHS } = require("../paths.js");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    path: path.resolve(PATHS.BUILD_DIR),
    publicPath: "/",
    filename: "js/[name].[contenthash].bundle.js",
  },
  plugins: [
    new InjectManifest({
      swSrc: "./src/src-sw.js",
      swDest: "sw.js",
      mode: "production",
      maximumFileSizeToCacheInBytes: 10000,
    }),
  ],
  optimization: {
    minimize: true,
    usedExports: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({ parallel: 8, extractComments: true,sourceMap: true, compress: {
        drop_console: true,
        keep_fnames: true,
      }, }),
    ],
    splitChunks: {
      chunks: "all",
      minSize: 51200,
      maxSize: 100000,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: "~",
  },
  performance: {
    hints: "warning",
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  }
});
