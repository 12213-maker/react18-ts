import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Header from './components/app-header'
import AppFooter from './components/app-footer'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'
import { useAppSelector } from './store'
import {ThemeColor} from '@/assets/data/local_data'



export default memo(function App() {

  const state = useAppSelector(state=>state.theme.activeTheme);
  const color = ThemeColor[state];


  return (
    <ThemeProvider theme={{...theme,color}}>
    <div className='App'>
      <Header></Header>
      <Suspense fallback={'loading...'}>
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter></AppFooter>
    </div>
    </ThemeProvider>

  )
})

