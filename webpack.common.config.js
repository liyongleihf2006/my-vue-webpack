const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        /* dll文件不需要解析 */
        noParse: /dll/,
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: "vue-loader",
                    options: {
                        transformAssetUrls: {
                            video: ['src', 'poster'],
                            source: 'src',
                            img: 'src',
                            image: 'xlink:href'
                        }
                    },
                }],
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader"
                }],
                include: path.join(__dirname, 'app')
            },
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV !== 'production'
                        ? 'vue-style-loader' :
                        MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }],
                include: path.join(__dirname, 'app')
            }, {
                test: /\.(png|jpg|gif|tiff|bmp|psd)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[path][name].[hash:4].[ext]'
                    }
                },
                include: [
                    path.join(__dirname, '/app')
                ]
            }, {
                test: /\.(svg|woff2|ttf|eot|woff)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[hash:4].[ext]'
                    }
                },
                include: [
                    path.join(__dirname, '/app')
                ]
            }, {
                test: /\.(mp3|mp4|wav|wma|ogg|wmv|avi|mpg|rm|rmvb|mov|dat|vob|flv|3gp)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[hash:4].[ext]'
                    }
                },
                include: [
                    path.join(__dirname, '/app')
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, "public/index.html"),
            favicon: path.join(__dirname,"public/favicon.ico")
        }),
        new CleanWebpackPlugin([path.join(__dirname, "dist")]),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[contenthash:4].css',
            chunkFilename: '[id].[contenthash:4].css'
        })
    ]
}