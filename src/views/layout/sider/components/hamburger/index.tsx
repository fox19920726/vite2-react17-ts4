import React, { FC, useEffect, useState } from 'react'
import { Button } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { IHamburger } from './index.d'
import './index.scss'

const Hamburger: FC<IHamburger> = (props) => {
  const { collapse, handleCollapse } = props
  
  const handleClick = () => {
    const finalCollapse = collapse ? '0' : '1'

    localStorage.setItem('isCollapse', finalCollapse)
    handleCollapse(!collapse)
  }

  return (
    <div onClick={handleClick} className={'collapse-container ' + (collapse ? 'unfold' : 'fold')}>
      {
        collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
      }
    </div>
  )
}

export default Hamburger