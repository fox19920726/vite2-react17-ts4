import React, { useState, FC } from 'react'
import PropTypes from 'prop-types'

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

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleBlur = (e) => {
    const { value } = e.target
    if(e.keyCode === 13) {
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

Form.propTypes = {
  filterName: PropTypes.func
}

export default Form