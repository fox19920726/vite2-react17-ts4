
// const modules = {}

// const requireContext = import.meta.globEager('./src/*.tsx')

console.log('33:', import.meta.glob('/src/*.tsx'))




// requireContext.keys().forEach((key) => {
//   const mod = requireContext(key)
//   if (mod.default) {
//     modules[mod.default.name] = mod.__esModule && mod.default ? mod.default : mod
//   }
// })

const paths = [{
  'path': '/dashbord',
  'name': 'Dashbord',
  'component': 'Dashbord',
  'show': true
}, {
  'path': '/',
  'name': 'Login',
  'component': 'Login',
  'show': true
}, {
  'path': '/list',
  'name': 'List',
  'component': 'List',
  'show': true
}, {
  'path': '/todo',
  'name': 'Todo',
  'component': 'Todo',
  'show': true
}]

// paths.forEach((item) => {
//   item.component = modules[item.name];
// })


export default paths
