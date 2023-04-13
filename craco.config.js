const path = require('path');
const getpath = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack:{
    //配置别名
    alias:{
      '@':getpath('src')
    }
  }
  
};