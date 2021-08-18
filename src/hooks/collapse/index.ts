import React, { useEffect, useState } from 'react'

const useCollapsed = () => {
  const [collapse, setCollapse] = useState(false)

  const handleCollapse = (flag: boolean): void => {
    const localState = flag ? '1' : '0'
    localStorage.setItem('isCollapse', localState)
    setCollapse(flag)
  }

  useEffect(() => {
    const firstState = localStorage.getItem('isCollapse') || '0'
    setCollapse(firstState === '1')
  }, [])

  return [collapse, handleCollapse] as const
}

export default useCollapsed