import React,  { FC } from 'react'
import { Router, Switch, Route, Link } from 'react-router-dom'
import { createHashHistory } from 'history'
import routes from '@/router/routers' 
import './index.scss'

const history = createHashHistory()

const NavBar: FC = () => {
  return (
    <Router history={history}>
      <ul>
        {
          routes.map((item, index) => {
            if (item.show) {
              return  <li key={index}><Link to={item.path} replace>{item.name}</Link></li>
            }
          })
        }
      </ul>
      <Switch>
        {
          routes.map((item, index) => {
            if (item.show) {
              return <Route exact path={item.path} key={index} component={item.component} />
            }
          })
        }
      </Switch>
    </Router>
  )
}

export default NavBar