var webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
var EncodingPlugin = require('webpack-encoding-plugin');




module.exports = merge(common, {
    plugins:[
            new webpack.optimize.CommonsChunkPlugin('common'),
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.DefinePlugin({
                       'process.env.NODE_ENV': JSON.stringify('production')
                     }),
            new EncodingPlugin({
              encoding: 'UTF-8'
            })
            ]
});