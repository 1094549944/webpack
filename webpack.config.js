const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCssPlugin = require('purifycss-webpack');

const entry=require('./webpack_config/entry.webpack');
const copyWebpackPlugin=require('copy-webpack-plugin');
console.log(encodeURIComponent(process.env.type));
if (process.env.type == 'build') {
    //线上环境
    var website = {
        publicPath: 'http:www.jiaxinying.com',//上线域名
    };
} else {
    //开发环境
    var website = {
        publicPath: 'http://192.168.0.110:8080/',
    };
}



module.exports = {
    devtool: 'source-map',
    entry:entry.path,//入口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: website.publicPath
    },//出口
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader", options: { importLoaders: 1 } },
                        'postcss-loader'
                    ]
                })
            }, {
                test: /\.(png|jpg|gif)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 500,
                            outputPath: 'images/'
                        }
                    }
                ]
            }, {
                test: /\.(html|htm)$/i,
                use: [
                    'html-withimg-loader'
                ]
            },
            {
                test: /\.less$/,
                use: extractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }, {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            }
        ]
    },//打包，比如css,图片处理
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:['jquery','vue'],
            filename:'assets/js/[name].js',
            minChunks:2

        }),
                //new uglify();
        new webpack.ProvidePlugin({
            $:"jquery",           
        }),
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,//添加hash,防止缓存
            template: './src/index.html'
        }),
        new extractTextPlugin('css/index.css'),
        new PurifyCssPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html')),

        }),
        new webpack.BannerPlugin('jiaxinyingwebpack搭建，可以在github中下载'),
        new copyWebpackPlugin([{
            from:__dirname+'/src/public',
            to:'./public'
        }])
    ],//插件
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '192.168.0.110',
        port: '8080',
        compress: true
    },//开发服务 
    watchOptions:{
        poll:1000,//1秒监测一次，更新一次
        aggregeateTimeout:500,//超时
        ignored:/node_modules/
    }
}