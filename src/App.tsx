import React, { memo, Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import Focus from './views/focus'
export default memo(function App() {
  return (
    <div className='App'>
      {/* 在组件里面传东西，会传入到props.children里面去，但是需要你自己定义children属性 */}


      <div className='nav'>
        <Link to='/discover' >发现音乐</Link>
        <Link to='/mine' >我的音乐</Link>
        <Link to='/focus' >关注</Link>
        <Link to='/download' >下载客户端</Link>
      </div>

      {/* 因为路由会进行懒加载，所以使用suspense对其进行包裹 */}
      {/* <div className='main'>{useRoutes(routes)}</div> */}

      <Suspense fallback={'loadi11111111111111111111111111111ng...'}>
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>


    </div>
  )
})
