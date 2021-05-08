export const mocks = () => ({
  name: 'configure-server',
  configureServer({ middlewares }) {
    middlewares.use(async (req, res, next) => {
      // if (req.url.indexOf('/apis/') !== -1) {
      //   res.body = { msg: '200' }
      // }
      if (req.url === '/apis/user/info') {
        // res.body = { msg: '200' }
      }
      await next()
    })
  }
})

