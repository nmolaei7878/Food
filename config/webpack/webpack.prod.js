const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PATHS } = require("../paths.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",

  output: {
    path: path.resolve(PATHS.BUILD_DIR),
    publicPath: "/",
    filename: "js/[name].[contenthash].bundle.js",
  },

  plugins: [
    new CompressionPlugin({
      algorithm: "brotliCompress",
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({ parallel: 8, extractComments: true }),
    ],
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      maxSize: 51200,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: "~",
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: {
      name: "runtime",
    },
  },
  performance: {
    hints: "warning",
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
