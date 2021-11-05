import { message } from 'antd' 
import { useDispatch } from 'react-redux'
import { getAsyncRoutes } from '@/api/api'
import routes from '@/router/routers' 
import { setRoutes } from '@/store/slice/getRoutes'

function useRouteList() {
  const dispatch = useDispatch()

  const handleAsyncRoutes = async (): Promise<void> => {
    const { rows, code, msg } = await getAsyncRoutes()
  
    if (code === 200) {
      /* 
      * 此处不能[...paths, ...rows]
      * 因为setPath会改变paths的值
      * 导致开发的时候多次请求接口累积paths
      */
      dispatch(setRoutes([...routes, ...rows]))
    } else {
      message.info(msg)
    }
  }

  return handleAsyncRoutes
}

export default useRouteList