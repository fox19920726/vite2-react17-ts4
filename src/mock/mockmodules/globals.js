import Mock from 'mockjs';

// Demo数据，开发时请按照实际情况编写代码
const list = Mock.mock({
  'rows|0-100': [{
    userName: '@cname',
    'type|0-100': 100 
  }],
  'errmsg': '成功',
  'errno': 0
})

const globals = [
  {
    // 获取用户token
    'url': '/getRouters',
    'type': 'get',
    'response': () => list
  }, {
    // 获取用户token
    'url': '/list',
    'type': 'get',
    'response': () => list
  }
];

export default globals;
