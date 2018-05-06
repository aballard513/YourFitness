const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
var path = require('path');
var parentDir = path.join(__dirname, '../');


var parentDir = path.join(__dirname, '../');

module.exports = merge(common, {

    devtool: 'source-map',
    
    output: {
        path: parentDir + 'dist/app',
        filename: '[name].js',
        publicPath: '/app/'
    },

    devServer: {
        contentBase: parentDir + 'src',
        historyApiFallback:true,
    }
    
});