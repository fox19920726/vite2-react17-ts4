import React, { FC } from 'react'
import { Layout } from 'antd'
import LayoutHeader from '@/views/Layout/header'
import LayoutContent from './components/layoutContent'

const ContentMain: FC = () => {
  return (
    <Layout>
      <LayoutHeader />
      <Layout>
        <LayoutContent />
      </Layout>
    </Layout>
  )
}

export default ContentMain