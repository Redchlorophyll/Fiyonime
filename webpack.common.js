const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  // entry: "./src/vendor.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      favicon: "./src/assets/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      template: "./src/detail.html",
      filename: "detail.html",
      favicon: "./src/assets/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/home.html",
      filename: "./pages/home.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/search.html",
      filename: "./pages/search.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/faq.html",
      filename: "./pages/faq.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/about.html",
      filename: "./pages/about.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/result.html",
      filename: "./pages/result.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/detail.html",
      filename: "./pages/detail.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/detail.html",
      filename: "./pages/detail.html"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          "html-loader"
        ]
      }
    ],
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
              publicPath: "assets/"
            }
        }
      }
    ]
  }
}
