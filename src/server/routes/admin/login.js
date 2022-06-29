const router = require('koa-router')();
const { generateToken } = require('../../utils/token');

router.post('/api/login', async (ctx) => {
  const responseBody = {
    code: 0,
    data: {}
  }
  try {
    responseBody.data = {
      a:1,
      b:2,
    }
    responseBody.data.msg = '登陆成功'
    responseBody.data.token = generateToken({ username:'fengmengna', userId: 'fengmengna' }) // 生成token
    responseBody.code = 200
  } catch (e) {
    responseBody.data.msg = '哦吼，请求失败了'
    responseBody.code = 404
  } finally {
    ctx.response.status = responseBody.code
    ctx.response.body = responseBody
  }
})


module.exports = router