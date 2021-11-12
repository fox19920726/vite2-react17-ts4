import Mock from 'mockjs';

// Demo数据，开发时请按照实际情况编写代码
const list = Mock.mock({
  'rows|0-100': [{
    userName: '@cname',
    'type|0-100': 100 
  }],
  'msg': '成功',
  'code': 200
})

const asyncRoutes = Mock.mock({
  'rows': [{
    'path': '/asyncTodo',
    'component': 'Todo',
    'show': true,
    'meta': { 'title': '异步导航5' },
    'children': [{
      'path': '/asyncTodo/a',
      'component': 'List',
      'show': true,
      'meta': { 'title': '异步导航5-1' }
    }]
  }, {
    'path': '/asyncList',
    'component': 'Todo',
    'show': true,
    'meta': { 'title': '异步导航6' }
  }],
  'msg': '成功',
  'code': 200
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
  }, {
    'url': '/getAsyncRoutes',
    'type': 'get',
    'response': () => asyncRoutes
  }
];

export default globals;
