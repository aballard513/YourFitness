var webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var EncodingPlugin = require('webpack-encoding-plugin');


module.exports = merge(common, {
    plugins:[
            new webpack.optimize.CommonsChunkPlugin('common'),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.DefinePlugin({
                       'process.env.NODE_ENV': JSON.stringify('production')
                     }),
            
          ]
});