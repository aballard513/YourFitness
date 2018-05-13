var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var parentDir = path.join(__dirname, '../');


module.exports = {
entry: [
    path.join(parentDir, 'src/app/index.js')
],

output: {
  path: parentDir + 'dist',
  filename: '[name].js',
  publicPath: '/'
},

module: {
    rules: [{
        
        test: /\.(js|jsx)$/,
                include: parentDir + 'src',
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{ 
                    presets: ["react", "es2015", "stage-2"]}
            },{
                test: /\.(less|css)$/,
                use: ["style-loader","css-loader","less-loader"]
                
              },
              {
                test: /\.(svg)$/,
                    loader: "file-loader",
                    options: {
                      name:'./images/[hash].[ext]'
                    }
              }


            ],    
            
},
node: {
    fs: "empty"
  },
resolve: {
    extensions: ['.js', '.jsx'] 
  },

  plugins: [
    new HtmlWebpackPlugin({
      "template" : "./index.html"
      }
    )

]
}