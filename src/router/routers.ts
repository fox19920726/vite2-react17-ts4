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
  'show': true,
  'meta': { 'title': '主页面1' }
}, {
  'path': '/a',
  'component': 'Dashbord',
  'show': true,
  'meta': { 'title': '主页面2' }
}, {
  'path': '/reload',
  'component': 'Reloador',
  'show': false,
  'meta': { 'title': 'reload' }
}]

export default paths
