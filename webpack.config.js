const path = require('path')
module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    context: path.resolve(__dirname, 'src'),
    entry: {
      app: './App.ts'
    },
    output: {
      path: path.resolve(__dirname, 'output/js'),
      filename: 'App.js'
    },
    devtool: 'source-map',
    devServer: {
      contentBase: './output',
      publicPath: '/sample'
    },
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        {
          test: /\.json$/,
          use: {
            loader: 'json-loader'
          }
        },
        {
          test: /\.tsx?$/,
          exclude: [/node_modules/],
          loader: 'ts-loader'
        },
        {
          test: /\.js$/,
          loader: 'sourse-map-loader',
          exclude: [/node_modules/]
        }
      ]
    }
  }
}
