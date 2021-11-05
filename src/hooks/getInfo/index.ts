import { getToken } from '@/utils/cookie'
import { getUserInfo, goExit } from '@/api/api'
import { useDispatch } from 'react-redux'
import { setInfo, clearInfo } from '@/store/slice/getInfo' 
import { removeToken } from '@/utils/cookie'

function useUserInfo() {
  const dispatch = useDispatch()

  const handleInfo = async (): Promise<void> => {
    const { data } = await getUserInfo(getToken())
    dispatch(setInfo(data))
  }

  const handleExit = async() => {
    /* 
    * 退出登陆
    * 删除本地cookie
    * 清除context里的user数据(其实并不需要删除，因为反正要刷新，哈哈哈哈哈)
    * 刷新页面
    */
    await goExit()
    removeToken()
    dispatch(clearInfo())
    window.location.reload()
  }
  return { handleInfo, handleExit } as const
} 
export default useUserInfo