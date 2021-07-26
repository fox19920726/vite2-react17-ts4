import React, { FC } from 'react'
import { Layout } from 'antd'
import './index.scss'

const { Header } = Layout

const LayoutHeader: FC = () => {
    return (
      <Layout>
        <Header className="header">我是头部啊</Header>
      </Layout>
    )
}
export default LayoutHeader