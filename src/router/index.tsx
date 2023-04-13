import Discover from '@/views/discover'
import Download from '@/views/download'
import Focus from '@/views/focus'
import Mine from '@/views/mine'
import { Navigate, RouteObject } from 'react-router-dom'

//使用RouteObject
const routes: RouteObject[] = [
  {
    path:'/',
    element:<Navigate to='/discover'></Navigate>
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