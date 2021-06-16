// const requireContext = import.meta.globEager('./src/*.tsx')
// const aa = ['Dashbord', 'List', 'Login', ''Todo'']
// import.meta.glob('/src/views/Login/*.tsx')
// import.meta.glob('/src/views/Login/*.tsx')

import { IRoute } from '@/types/menuInterface'

const paths: IRoute[] = [{
  'path': '/dashbord',
  'meta': { 'title': '导航1' },
  'show': true,
  'children': [{
    'path': '/dashbord/a',
    'show': true,
    'meta': { 'title': '导航1-1' },
    'children': [{
      'path': '/dashbord/a/b',
      'show': false,
      'meta': { 'title': '导航1-1-1' },
      'children': [{
        'path': '/dashbord/a/b/c',
        'component': 'List',
        'show': true,
        'children': [],
        'meta': { 'title': '导航1-1-1-1' }
      }, {
        'path': '/dashbord/a/b/d',
        'component': 'Todo',
        'show': true,
        'meta': { 'title': '导航1-1-1-2' }
      }]
    }]
  }, {
    'path': '/dashbord/e',
    'component': 'Todo',
    'show': true,
    'meta': { 'title': '导航1-2' }
  }]
}, {
  'path': '/',
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
