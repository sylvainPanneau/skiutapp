const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
    entry: [
        "./src/skiutc.js"
    ],
    output: {
        path: __dirname + "/public_html",
        filename: "[name].min.js",
        chunkFilename: "[name].min.js"
    },
    mode: "production",
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
                test: /.html$/,
                use: [
                    "htmllint-loader",
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader",
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.(png|jpg)$/i,
                use:[{
                    loader: "url-loader",
                    options: {
                        limit: 20000,
                        name: 'images/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                        name:  'images/[name].[ext]'
                    }
                }
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
    devtool: "#inline-source-map",
    devServer: {
        contentBase: "./public_html",
        hot: true
    },
    target: "web",
    optimization: {
        minimizer:[
            new UglifyJSPlugin({
                sourceMap: true
            })
        ],
        splitChunks: {
            chunks: "all",
            name: "commons"
        }
    }
};
