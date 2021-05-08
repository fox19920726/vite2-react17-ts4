import Mock from 'mockjs'
import user from './mockmodules/user'

const moduleLists = [
  ...user
]

moduleLists.forEach((item) => {
  const { url, type, response } = item
  Mock.mock(url, type, response)
})
