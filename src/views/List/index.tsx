import React, { FC, useEffect } from 'react'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import { userInfoSelector } from '@/store/slice/getInfo'
import { useUserInfo } from '@/hooks'
// Consumer下面只能写一个函数

const List: FC = () => {
  const { data: { userName, roleName } } = useSelector(userInfoSelector)
  const { handleInfo } = useUserInfo()
  useEffect(() => {
    handleInfo()
  }, [])
  return (
    <div>
      <p>我叫：{userName}</p>
      <p>我叫：{roleName}</p>
      <Button type="primary" htmlType="submit" onClick={handleInfo}>重新请求用户数据</Button>
    </div>
  )
}

export default List
