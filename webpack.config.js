const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    "webpack/hot/only-dev-server",
    "./src/skiutc.js"
  ],
  output: {
    path: __dirname + "/webdocs",
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
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./webdocs",
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
