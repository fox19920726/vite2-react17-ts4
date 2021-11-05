import React, { FC, useEffect } from 'react'
import { useUserInfo, useRouteList } from '@/hooks'
import { Layout } from 'antd'
import LayoutHeader from '@/views/Layout/header'
import LayoutSider from '@/views/Layout/sider'
import LayoutContent from './components/layoutContent'
import TagView from '@/views/Layout/tagView'

const ContentMain: FC = () => {
  const { handleInfo } = useUserInfo()
  const handleAsyncRoutes = useRouteList()

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