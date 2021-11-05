import React, { FC } from 'react'
import { Layout, Row, Col } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import './index.scss'
import { useUserInfo } from '@/hooks'

const { Header } = Layout

const LayoutHeader: FC = () => {
  /*
  * 反正退出账号后，也不需要数据关联
  * 所以直接从自定义hook里执行方法也行
  */
  const { handleExit } = useUserInfo()

  return (
    <Layout>
      <Header className="header">
        <Row>
          <Col span={23}>假装是LOGO</Col>
          <Col span={1} className="logout-container">
            <LoginOutlined onClick={handleExit} className="logout-btn"/>
          </Col>
        </Row>
      </Header>
    </Layout>
  )
}
export default LayoutHeader