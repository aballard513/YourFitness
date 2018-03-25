var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'src/app/index.js'),
        
    ],

    output: {
        path: parentDir + 'dist/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },

    module: {
        loaders: [{
            
            test: /\.(js|jsx)$/,
                    include: parentDir + 'src',
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query:{ 
                        presets: ["react", "es2015", "stage-2"]}
                },{
                    test: /\.less$/,
                    loaders: ["style-loader", "css-loader", "less-loader"]
                  }
                ],    
                
    },

    resolve: {
        extensions: ['.js', '.jsx'] 
      },

    devServer: {
        contentBase: parentDir + 'src',
        historyApiFallback:true
    }
    
}

