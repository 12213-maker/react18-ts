import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
// import Discover from '@/views/discover'
// import Download from '@/views/download'
// import Focus from '@/views/focus'
// import Mine from '@/views/mine'

//使用lazy对组件进行懒加载,但是点击的时候可能还没有下载下来，所以要搭配suspense使用
const Discover = lazy(() => import('@/views/discover'));
const Download = lazy(() => import('@/views/download'));
const Focus = lazy(() => import('@/views/focus'));
const Mine = lazy(() => import('@/views/mine'));

//使用RouteObject
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/discover'></Navigate>
  },
  {
    path: '/discover',
    element: <Discover></Discover>
  },
  {
    path: '/mine',
    element: <Mine></Mine>
  },
  {
    path: '/focus',
    element: <Focus></Focus>
  },
  {
    path: '/download',
    element: <Download></Download>
  },
]

export default routes 