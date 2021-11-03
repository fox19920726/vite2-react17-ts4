import React, { useContext, FC } from 'react'
import { Button } from 'antd'
import UserContext from '@/contexts/userContext'
import { useUserInfo } from '@/hooks'
import { useSelector } from 'react-redux'
// Consumer下面只能写一个函数

const List: FC = () => {
  // const { userInfo: { userName, roleName }, handleInfo } = useContext(UserContext)
  const { userName, roleName } = useSelector(({ userInfoReducer }) => userInfoReducer)
  const [handleInfo] = useUserInfo()
  return (
    <div>
      <p>我叫：{userName}</p>
      <p>我叫：{roleName}</p>
      <Button type="primary" htmlType="submit" onClick={handleInfo}>重新请求用户数据</Button>
    </div>
  )
}

export default List
