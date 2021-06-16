import Mock from 'mockjs'
import user from './mockmodules/user'
import globals from './mockmodules/globals'

const moduleLists = [
  ...user,
  ...globals
]

moduleLists.forEach((item) => {
  const { url, type, response } = item
  Mock.mock(new RegExp(url), type, response)
})
