// Webpack 4

const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const WebpackMd5Hash = require('webpack-md5-hash')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')


// Параметры (cross-env)
const devMode = process.env.DEV_MODE
const isDev = devMode != 'build'

module.exports = {
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9000,
    //     index: 'index.html'
    // },

    mode: devMode !== 'build' ? 'development' : 'production',
    entry: {
        build: './src/main.js'
    },
    output: {
        filename: 'js/[name].js',
        publicPath: '/',
        library: '[name]',
        path: path.resolve(__dirname + '/assets')
    },
    watch: (devMode == 'watch' || devMode == 'watch-sync') ? true : false,
    devtool: isDev ? 'inline-cheap-module-source-map' : false,
    resolve: {
        alias: {
            'jquery': path.resolve(__dirname, 'vendor/jquery/dist/jquery'),
            '@': path.resolve(__dirname, 'src'),
        },
        modules: [
            path.resolve(__dirname, '/vendor'), path.resolve(__dirname, '/node_modules'), path.resolve(__dirname, '/src/modules')
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    comments: false,
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_fnames: false,
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    module: {
        rules: [{
            test: /\.(eot|woff2|woff|ttf|otf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: isDev ? '/fonts/[path][name].[ext]' : '/fonts/[path][name]~[hash].[ext]'
                }
            }
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components|vendor)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    //                  plugins: ['transform-runtime']
                }
            }]
        }, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    sourceMap: isDev
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        autoprefixer({
                            browsers: ['ie >= 9', 'last 4 version']
                        })
                    ],
                    sourceMap: isDev
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: isDev
                }
            }
            ]
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    sourceMap: isDev
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        autoprefixer({
                            browsers: ['ie >= 9', 'last 4 version']
                        })
                    ],
                    sourceMap: isDev
                }
            }
            ]
        }, {
            test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'images/[name]~[hash].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new WebpackNotifierPlugin({
            title: 'Webpack',
            skipFirstNotification: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new WebpackMd5Hash(),
    ]
}

if (!isDev) {
    module.exports.plugins.push(
        new CleanWebpackPlugin(
            ['js', 'css'], {
            root: path.resolve(__dirname + '/assets')
        }
        )
    )
}

if (devMode == 'watch-sync') {
    module.exports.plugins.push(new BrowserSyncPlugin({
        host: 'localhost/',
        port: 9001,
        server: { baseDir: ['assets'] },
        notify: false,
        files: ['**/*.html'],
    }, {
        injectCss: true,
    }))
}
