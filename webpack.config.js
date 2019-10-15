const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    "webpack/hot/only-dev-server",
    "./src/skiutc.js"
  ],
  output: {
    path: __dirname + "/public_html",
    publicPath: "/",
    filename: "[name].min.js",
    chunkFilename: "[name].min.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["react-hot-loader/webpack", "babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader"
      },
      {
        test: /\.(png|svg|jpg)$/i,
        use:[{
          loader: "url-loader",
          options: {
            limit: 20000
          }
        }]
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
    extensions: [".js", ".json", ".jsx", ".css"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "skiutc.html",
      template: "public_html/skiutc_template.html"
    })
  ],
  devServer: {
    contentBase: "./public_html",
    hot: true
  },
  target: "web",
  optimization: {
    splitChunks: {
      chunks: "all",
      name: "commons"
    }
  }
};
