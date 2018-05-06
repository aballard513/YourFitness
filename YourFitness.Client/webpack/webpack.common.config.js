var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var parentDir = path.join(__dirname, '../');


module.exports = {
entry: [
    path.join(parentDir, 'src/app/index.js')
],

output: {
    path: parentDir + 'dist/app',
    filename: '[name].js',
    libraryTarget: 'commonjs',
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
                test: /\.(less|css)$/,
                loaders: ["style-loader","css-loader", "less-loader" ]
              },
              {
                  test: /\.(ttf)$/,
                  use: [
                    {
                      loader: 'ttf-loader',
                      options: {
                        name: './font/[hash].[ext]',
                      },
                    },
                  ],
              },

            

              {
                test: /\.(eot|woff|woff2|ico|svg)$/,
                    loader: "file-loader"
              }, {
                  test: /\.html?$/,
                        loader:"file?name=./[name].[ext]"
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
]
}