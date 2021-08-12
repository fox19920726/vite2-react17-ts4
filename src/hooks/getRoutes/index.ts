import React, { useEffect, useState } from 'react'
import { message } from 'antd' 
import { getAsyncRoutes } from '@/api/api'
import routes from '@/router/routers' 
import { IRoute } from '@/types/menuInterface'

function useRouteList(): any[] {
  const [paths, setPath] = useState(routes)
  const handleAsyncRoutes = async (): Promise<void> => {
    const { rows, code, msg } = await getAsyncRoutes()
  
    if (code === 200) {
      /* 
      * 此处不能[...paths, ...rows]
      * 因为setPath会改变paths的值
      * 导致开发的时候多次请求接口累积paths
      */
      setPath([...routes, ...rows])
    } else {
      message.info(msg)
    }
  }

  return [paths, handleAsyncRoutes]
}

export default useRouteList