const path = require('path')
const CracoLess = require('craco-less')
const getpath = (dir) => path.resolve(__dirname, dir)
module.exports = {
  plugins: [{ plugin: CracoLess }],
  webpack: {
    //配置别名
    alias: {
      '@': getpath('src')
    }
  }
}
