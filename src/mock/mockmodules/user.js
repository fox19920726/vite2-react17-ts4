// Demo数据，开发时请按照实际情况编写代码
const info = {
  'data': {
    'roleId': 1,
    'roleName': '@cname',
    'token': 'f7a85b6c-eb18-4468-8252-601a4affab9d',
    'userId': 1,
    'userName': '@cname'
  },
  'msg': '成功',
  'code': 200
}

const login = { ...info }

const logout = { ...info }


const user = [
  {
    'url': '/login',
    'type': 'post',
    'response': login
  },
  {
    'url': '/user/info',
    'type': 'get',
    'response': info
  },
  {
    'url': '/logout',
    'type': 'post',
    'response': logout
  }
]

export default user