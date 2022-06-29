const router = require('koa-router')();

router.get('/api/user/:id', async (ctx) => {
  const responseBody = {
    code: 0,
    data: {}
  }
  try {
    responseBody.data = {
      a:1,
      b:2,
    }
    responseBody.code = 200;
  } catch (e) {
    responseBody.data.msg = '阿啊阿啊阿啊'
    responseBody.code = 404
  } finally {
    ctx.response.status = responseBody.code
    ctx.response.body = responseBody
  }
})

module.exports = router
