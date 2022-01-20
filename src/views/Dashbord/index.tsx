import React, { useEffect, useState, FC } from 'react'

const Dashbord: FC = () => {
  const [count, setCount] = useState(0)
  // 只在最顶层使用 Hook, 不要在循环，条件或嵌套函数中调用 Hook
  // 如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的内部
  // React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。

  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    // 组件被卸载的时候执行
    return () => {
      console.log(3)
    }

  }, [count])// 仅在 count 更改时更新，如果是[]表示只在组件挂载和卸载时执行

  // hook的执行是有顺序的
  useEffect(() => {
    console.log('dashboard')
  }, [])

  return (
    <div>
      <p>
        我是页面内容
        You clicked {count} times
      </p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );

}

export default Dashbord
