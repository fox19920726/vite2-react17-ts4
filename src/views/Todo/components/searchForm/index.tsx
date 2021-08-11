import React, { useState, FC } from 'react'
import './index.scss'
// import PropTypes from 'prop-types'

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
    if(e.key === 'ENTER') {
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

/*
* 其实有了typeScript,不检查PropTypes也行的
*/
// Form.propTypes = {
//   filterName: PropTypes.func.isRequired
// }

export default Form