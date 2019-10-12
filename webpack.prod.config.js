const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: "./src/skiutc.js"
    },
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
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: "skiutc.html",
            template: "public_html/skiutc_template.html",

        })
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
        runtimeChunk: 'single',
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                    // get the name. E.g. node_modules/packageName/not/this/part.js
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        }
    }
};
