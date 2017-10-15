import { resolve } from 'path'

module.exports = {
  module: {
    rules: [
      {
        test: /(\.css)$/,
        include: resolve(__dirname, 'src'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /(\.css)$/,
        include: resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
}
