// const requireContext = import.meta.globEager('./src/*.tsx')
// const aa = ['Dashbord', 'List', 'Login', ''Todo'']
// import.meta.glob('/src/views/Login/*.tsx')
// import.meta.glob('/src/views/Login/*.tsx')

import { IRoute } from '@/types/menuInterface'

const paths: IRoute[] = [{
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
  'path': '/',
  'component': 'Dashbord',
  'show': true,
  'meta': { 'title': '主页面' }
}, {
  'path': '/dashbord',
  'component': 'Dashbord',
  'show': true,
  'meta': { 'title': '主页面' }
}, {
  'path': '/login',
  'component': 'Login',
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
  'show': false,
  'meta': { 'title': '导航4' }
}]

export default paths
