import React, { FC, useState } from 'react'
import { Link, Router } from 'react-router-dom'
import { createHashHistory } from 'history'
import './index.scss'
import { Menu } from 'antd'
import routes from '@/router/routers'

const history = createHashHistory()
const { Item } = Menu

const HeaderNav: FC = () => {
  const [selectKey, setKey] = useState(['0'])

  const handleClick = (e) => {
    const { key } = e
    setKey([...key])
  }

  return (
    <>
      <Router history={history}>
        <Menu mode="horizontal" selectedKeys={selectKey} onClick={handleClick}>
          {
            routes.map(({ show, path, meta: { title } }, index) => {
              if (show) {
                return  <Item key={index}><Link to={path} replace>{title}</Link></Item>
              }
            })
          }
        </Menu>
      </Router>
    </>
  )
}
export default HeaderNav