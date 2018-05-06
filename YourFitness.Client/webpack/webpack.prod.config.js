var webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
var EncodingPlugin = require('webpack-encoding-plugin');
var path = require('path');
var parentDir = path.join(__dirname, '../');
const ASSET_PATH = process.env.ASSET_PATH || '/';


module.exports = merge(common, {

  output: {
    path: parentDir + 'app',
    filename: '[name].js',
    publicPath: ASSET_PATH
},
    plugins:[
            new webpack.optimize.CommonsChunkPlugin('common'),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.DefinePlugin({
                       'process.env.NODE_ENV': JSON.stringify('production'),
                       'process.env.ASSET_PATH': JSON.stringify('ASSET_PATH')
                     }),
            new EncodingPlugin({
              encoding: 'UTF-8'
            })
            ]
});