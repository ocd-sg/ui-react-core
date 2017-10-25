import { resolve } from 'path'

import DashboardPlugin from 'webpack-dashboard/plugin'

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
  },
  plugins: [
    new DashboardPlugin()
  ],
  resolve: {
    symlinks: false
  }
}
