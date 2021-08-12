import React, { FC, useContext, useEffect } from 'react'
import UserContext from '@/contexts/userContext'
import RouteContext from '@/contexts/routeContext'

import { Layout } from 'antd'
import LayoutHeader from '@/views/Layout/header'
import LayoutSider from '@/views/Layout/sider'
import LayoutContent from './components/layoutContent'
import TagView from '@/views/Layout/tagView'

const ContentMain: FC = () => {
  const { handleInfo } = useContext(UserContext)
  const { handleAsyncRoutes } = useContext(RouteContext)

  useEffect(() => {
    /*
    * useEffect本身不支持async Promise<void>这样的
    * 可以用这样的自执行函数去实现
    */
    (async (): Promise<void> => {
      await handleInfo()
      handleAsyncRoutes()
    })()
  }, [])

  return (
    <Layout>
      <LayoutHeader />
      <Layout>
        <LayoutSider />
        <Layout>
          <TagView />
          <LayoutContent />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default ContentMain