let baseUrl = ''
switch (process.env.NODE_ENV) {
  // 本地开发
  case 'localhost': baseUrl = 'http://localhost:8080/'; break;
  // 开发环境
  case 'development': baseUrl = 'http://development:8080/'; break;
  // 测试环境
  case 'test': baseUrl = 'http://test:8080/'; break;
  // 生成环境
  case 'production': baseUrl = 'http://production:8080/'; break;
}
module.exports = {
  baseUrl: baseUrl
}