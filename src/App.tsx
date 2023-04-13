import React, { memo } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import Focus from './views/focus'
export default memo(function App() {
  return (
    <div>
      {/* 在组件里面传东西，会传入到props.children里面去，但是需要你自己定义children属性 */}
      <Link to='/discover' state={{ name: 'lnl' }}>discover</Link>
      <Link to='/mine' state={{ name: 'lnl' }}>mine</Link>
      <Link to='/focus' state={{ name: 'lnl' }}>focus</Link>
      <Link to='/download' state={{ name: 'lnl' }}>download</Link>
      {useRoutes(routes)}
    </div>
  )
})
