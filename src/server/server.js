const admin = require('./app/admin')

admin.listen(4000, () => {
  console.log('管理端已启动: 端口号为4000')
})