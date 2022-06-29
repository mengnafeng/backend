const koaJwt = require('koa-jwt')

const verifyToken = () => {
  return koaJwt({ secret: 'fengmengna' }).unless({
    // 排除不验证的路由
    path: [
      /login/,
      /register/
    ]
  })
}

module.exports = verifyToken