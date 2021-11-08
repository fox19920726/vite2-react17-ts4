// const requireContext = import.meta.globEager('./src/*.tsx')
// const aa = ['Dashbord', 'List', 'Login', ''Todo'']
// import.meta.glob('/src/views/Login/*.tsx')
// import.meta.glob('/src/views/Login/*.tsx')

import { IRoute } from '@/tsTypes/menuInterface.d'

/* 
* show设置为false，在菜单里是看不到的
* 但是我路由设计的时候还是渲染了的，所以通过地址栏输入是可以访问该路由的
*/
const paths: IRoute[] = [{
  'path': '/',
  'component': 'Dashbord',
  'show': false,
  'meta': { 'title': '主页面' }
}, {
  'path': '/multy',
  'meta': { 'title': '导航1' },
  'show': true,
  'children': [{
    'path': '/multy/a',
    'show': true,
    'meta': { 'title': '导航1-1' },
    'children': [{
      'path': '/multy/a/b',
      'show': true,
      'meta': { 'title': '导航1-1-1' },
      'children': [{
        'path': '/multy/a/b/c',
        'component': 'List',
        'show': true,
        'children': [],
        'meta': { 'title': '导航1-1-1-1' }
      }, {
        'path': '/multy/a/b/d',
        'component': 'Todo',
        'show': true,
        'meta': { 'title': '导航1-1-1-2' }
      }]
    }]
  }, {
    'path': '/multy/e',
    'component': 'Todo',
    'show': true,
    'meta': { 'title': '导航1-2' }
  }]
}, {
  'path': '/luluya',
  'component': 'Todo',
  'show': true,
  'meta': { 'title': '导航2' }
}, {
  'path': '/list',
  'component': 'List',
  'show': true,
  'meta': { 'title': '导航3' }
}, {
  'path': '/todo',
  'component': 'Todo',
  'show': true,
  'meta': { 'title': '导航4' }
}, {
  'path': '/reload',
  'component': 'Reloador',
  'show': false,
  'meta': { 'title': 'reload' }
}]

export default paths
