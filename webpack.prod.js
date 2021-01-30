const path = require("path");
const { merge } =  require("webpack-merge");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].bundle.js"
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
        MiniCssExtractPlugin.loader,
        {loader: "css-loader" },
        {loader: "sass-loader"},
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[hash].css" })
  ]
})
