import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
// import Discover from '@/views/discover'
// import Download from '@/views/download'
// import Focus from '@/views/focus'
// import Mine from '@/views/mine'

//使用lazy对组件进行懒加载,但是点击的时候可能还没有下载下来，所以要搭配suspense使用
const Discover = lazy(() => import('@/views/discover'));
const Songs = lazy(() => import('@/views/discover/c-views/songs'));
const Artist = lazy(() => import('@/views/discover/c-views/artist'));
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'));
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'));
const Album = lazy(() => import('@/views/discover/c-views/album'));
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'));

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
    element: <Discover></Discover>,
    children: [
      //一级路由下优先显示的二级路由
      {
        path: '/discover',
        element: <Navigate to='/discover/recommend'></Navigate>
      },
      {
        path: '/discover/album',
        element: <Album></Album>
      },
      {
        path: '/discover/songs',
        element: <Songs></Songs>
      },
      {
        path: '/discover/artist',
        element: <Artist></Artist>
      },
      {
        path: '/discover/recommend',
        element: <Recommend></Recommend>
      },
      {
        path: '/discover/ranking',
        element: <Ranking></Ranking>
      },
      {
        path: '/discover/djradio',
        element: <Djradio></Djradio>
      },
    ]
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