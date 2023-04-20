const path = require('path')
const CracoLess = require('craco-less')
const getpath = (dir) => path.resolve(__dirname, dir)
module.exports = {
  plugins: [
    {
      plugin: CracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }

    }
  ],
  webpack: {
    //配置别名
    alias: {
      '@': getpath('src')
    }
  }
}
