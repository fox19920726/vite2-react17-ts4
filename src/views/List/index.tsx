import React, { useContext, FC } from 'react'
import UserContext from '@/contexts/userContext'

// Consumer下面只能写一个函数

const List: FC = () => {

  const { state: { userName, roleName }, handleInfo } = useContext(UserContext)

  return (
    <div>
      <p>我叫：{userName}</p>
      <p>我叫：{roleName}</p>
      <button onClick={handleInfo}>重新请求数据</button>
    </div>
  )
}

export default List
