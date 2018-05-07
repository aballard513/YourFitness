var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var parentDir = path.join(__dirname, '../');


module.exports = {
entry: [
    path.join(parentDir, 'src/app/index.js')
],

output: {
  path: parentDir,
  filename: '[name].js',
  publicPath: '/'
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
                test: /\.(less|css)$/,
                use: ["style-loader","css-loader","less-loader"]
                
              },
              {
                  test: /\.(ttf)$/,
                  use: [
                    {
                      loader: 'ttf-loader',
                      options: {
                        name: './ttf/[hash].[ext]',
                      },
                    },
                  ],
              },

            

              {
                test: /\.(eot|woff|woff2|ico|svg)$/,
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
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      Popper: 'popper.js',
      $: 'jquery'
    }),
    new HtmlWebpackPlugin({
      "template" : "./index.html"
      }
    )

]
}