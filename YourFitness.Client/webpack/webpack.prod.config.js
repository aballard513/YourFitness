var webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const CompressionPlugin = require("compression-webpack-plugin")


module.exports = merge(common, {
 

    optimization: {
    minimize: true,
    /*runtimeChunk: true,
    splitChunks: {
        chunks: "async",
        minSize: 1000,
        minChunks: 2,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: {
            default: {
                minChunks: 1,
                priority: -20,
                reuseExistingChunk: true,
            },

            commons:{
              name:"commons",
              chunks: "initial",
              minChunks: 2
            },
          
        }
    }*/
},

plugins:[
  new webpack.DefinePlugin({
    'NODE_ENV': JSON.stringify('production')
  }),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
}),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  
]
});