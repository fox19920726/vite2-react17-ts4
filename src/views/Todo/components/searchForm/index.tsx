import React, { useState, FC } from 'react'
import './index.scss'

interface Props {
  filterName: (name: string) => void
}

const Form: FC<Props> = (props) => {
  const [form, setForm] = useState({
    name: '',
    type: ''
  })

  const handleSubmit = () => {
    // e.preventDefault()

    console.log('正在查询...')
  }

  /* 
  * 这里写HTMLInputElement | HTMLSelectElement的原因是
  * name是输入的，type是选择的，他们用的同一个方法，为了两者都支持，所以....
  */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.currentTarget
    setForm({
      ...form,
      [name]: value
    })
  }
  /* 
  * 这里keyCode被deprecated了...
  * 只好用key判断字符串了
  */
  const handleBlur = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget
    /*
    * 他喵e.key本来全是大写字母的，突然变成驼峰了，吐了
    * 全转为小写字母再判断靠谱一些
    */
    if(e.key.toLocaleLowerCase() === 'enter') {
      props.filterName(value)
    }
  }

  return (
    <div>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        onKeyUp={handleBlur}
        placeholder="请输入"
        autoComplete="off"
      />
      <select
        name="type"
        onChange={handleChange}
        placeholder="请选择"
      >
        <option value="0">未审核</option>
        <option value="1">审核未通过</option>
        <option value="2">已发送</option>
      </select>
      <button onClick={handleSubmit}>提交</button>
    </div>
  )
}

export default Form