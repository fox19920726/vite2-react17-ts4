import React, { FC } from 'react'
import { Router } from 'react-router-dom'
import { createHashHistory } from 'history'
import 'antd/dist/antd.css'
import '@/styles/App.scss'
import { Provider } from 'react-redux'
import store from '@/store'
import ContentMain from './views/Layout'

const history = createHashHistory()

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="app">
          <ContentMain />
        </div>
      </Router>
    </Provider>
  )
}

export default App