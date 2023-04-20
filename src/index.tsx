import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './assets/css/index.less'
import { HashRouter } from 'react-router-dom'
import App from '@/App'

//store
import store from './store'
import { Provider } from 'react-redux'



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
