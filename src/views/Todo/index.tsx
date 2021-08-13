import React, { useState, FC } from 'react'
import Form from './components/searchForm'

const Todo: FC = () => {

  const initial = [{
    name: '章三',
    type: 0
  }, {
    name: '李四',
    type: 1
  }, {
    name: '王五',
    type: 2
  }]

  const [list, setList] = useState([...initial])

  const handleClick = (): void => {
    setList([
      ...list,
      {
        name: '张磊',
        type: 0
      }
    ])
  }

  const filterName = (name: string): void => {
    if (name) {
      const newList = list.filter((item) => item.name.indexOf(name) !== -1)
      setList(newList)
      return
    }
    setList(initial)
  }

  return (
    <div>
      <div onClick={handleClick}>点击</div>
      <Form filterName={filterName}/>
      <ul>
        {
          list.map((item, index) => {
           return <li key={index}>{item.name}</li>
         })
        }
      </ul>
    </div>
  )
}

export default Todo

