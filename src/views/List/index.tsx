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
    setState({ ...state, address: value })
  }

  useEffect(() => {
    // 回填表单数据，真实的业务场景应该是从接口请求过来数据，然后填充表单
    form.setFieldsValue({ address: data?.list?.address })
    // 回填存储的数据，比如flag字段什么的
    setState({ ...state, address: data?.list?.address })
    // 请求用户信息-demo，这种调用更改store数据的方法要谨慎，因为只要有用到这批数据的组件，都会发生重新渲染
    handleInfo()
    console.log(6)
  }, [])

  useEffect(() => {
    // 退出组件时，存下数据
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
