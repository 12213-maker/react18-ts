// 1.手动切换
export const BASE_URL = 'http://codercba.com:9002'
// export const BASE_URL = 'http://codercba.prod:9002'
export const TIME_OUT = 10000

// 2.依赖当前环境: development（开发环境）/production（生产环境）
//process.env.NODE_ENV可以根据现在的环境返回不同的值
console.log(process.env.NODE_ENV);


// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://codercba.dev:9002'
// } else {
//   BASE_URL = 'http://codercba.prod:9002'
// }

// export { BASE_URL }

// 3.从定义的环境变量的配置文件中, 加载变量
/*
开发环境文件名：.env.development
      然后就可以通过process.env.REACT_APP_XXX来访问对应变量(react+webpack中需要以REACT_APP开头)
生产环境文件名：.env.production
      然后就可以通过process.env.REACT_APP_XXX来访问对应变量
*/
// console.log(process.env.REACT_APP_BASE_URL)
console.log(process.env);

