import React, { FC, useEffect, useState } from 'react'
import { Button, Form, Input } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { userInfoSelector } from '@/store/slice/getInfo'
import { useUserInfo } from '@/hooks'
import { setData, dataSelector } from '@/store/slice/dataCenter'
import { useForm } from 'antd/lib/form/Form'

// Consumer下面只能写一个函数

const List: FC = () => {
  const { data: { userName, roleName } } = useSelector(userInfoSelector)
  // 进入组件时读取缓存在store的数据
  const { data } = useSelector(dataSelector)
  const dispatch = useDispatch()
  const [form] = useForm()
  const [state, setState] = useState({ userInfo: {}, address: '' })
  const { handleInfo } = useUserInfo()

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    // 表单的数据需要这样blur的时候记录，列表数据需要在请求完毕后记录
    const { value } = e.target
    setState({ userInfo: { a: 1 }, address: value })
  }

  useEffect(() => {
    // 回填表单数据
    form.setFieldsValue({ address: data?.list?.address })
    // 回填存储的数据
    setState({ userInfo: { a: 1 }, address: data?.list?.address })
    // 请求用户信息-demo
    handleInfo()
  }, [])

  useEffect(() => {
    return () => {
      dispatch(setData({ type: 'list', data: state }))
    }
  }, [state])

  return (
    <div>
      <Form
        form={form}
        name="loginForm"
        labelCol={{ span: 6 }}
      >
        <Form.Item
          label="地址"
          name="address"
          validateTrigger={'onBlur'}
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input onBlur={handleBlur} />
        </Form.Item>
      </Form>
      <p>我叫：{userName}</p>
      <p>我叫：{roleName}</p>
      <Button type="primary" htmlType="submit" onClick={handleInfo}>重新请求用户数据</Button>
    </div>
  )
}

export default List
