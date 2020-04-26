const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')

module.exports = (_, argv) => {
  return {
    mode: argv.mode || 'development',
    devtool:
      argv.mode === 'production' ? 'source-map' : 'eval-cheap-source-map',
    target: 'web',
    entry: {
      main: path.join(__dirname, 'src/main.ts')
    },
    output: {
      path: path.join(__dirname, 'out'),
      filename: '[name].js'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.wasm']
    },
    devServer: {
      port: 33857
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new WasmPackPlugin({
        crateDirectory: path.join(__dirname, '.'),
      })
    ]
  }
}
