// const requireContext = import.meta.globEager('./src/*.tsx')
// const aa = ['Dashbord', 'List', 'Login', 'Todo']
// import.meta.glob('/src/views/Login/*.tsx')
// import.meta.glob('/src/views/Login/*.tsx')

import Dashbord from '@/views/Dashbord'
import List from '@/views/List'
import Login from '@/views/Login'
import Todo from '@/views/Todo'

const paths = [{
  'path': '/dashbord',
  'name': 'Dashbord',
  'component': Dashbord,
  'show': true
}, {
  'path': '/',
  'name': 'Login',
  'component': Login,
  'show': true
}, {
  'path': '/list',
  'name': 'List',
  'component': List,
  'show': true
}, {
  'path': '/todo',
  'name': 'Todo',
  'component': Todo,
  'show': true
}]

export default paths
