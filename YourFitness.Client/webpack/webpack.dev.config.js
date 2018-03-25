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
                    test: /\.(less|css)$/,
                    loaders: ["style-loader", "css-loader", "less-loader", "font-loader"]
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
                    test: /\.svg$/,
                        use: [
                        {
                            loader: "babel-loader"
                        },
                        {
                            loader: "react-svg-loader",
                            options: {
                                        jsx: true // true outputs JSX tags
                                     }
                        }
                            ]
                  },

                  {
                    test: /\.(eot|woff|woff2|ico)$/,
                        loader: "file-loader"
                  }


                ],    
                
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
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],

    devServer: {
        contentBase: parentDir + 'src',
        historyApiFallback:true
    }
    
}

