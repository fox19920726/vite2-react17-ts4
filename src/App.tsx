import React, { FC } from 'react'
import { Router } from 'react-router-dom'
import { createHashHistory } from 'history'
import 'antd/dist/antd.css'
import '@/styles/App.scss'
import { Provider } from 'react-redux'
import store from '@/store'
import LayoutMain from '@/views/Layout'

const history = createHashHistory()

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="app">
          <LayoutMain />
        </div>
      </Router>
    </Provider>
  )
}

export default App