// 一些全局的config配置
const modeUrlObj = {
  // 生产环境
  'production': {
    baseURL: 'http://localhost:8080/',
    authBaseURL: ''
  },
  // 开发环境
  'development': {
    baseURL: 'http://localhost:8080/',
    authBaseURL: ''
  },
  // 测试环境
  'test': {
    baseURL: 'http://localhost:8080/',
    authBaseURL: ''
  }
}

export default modeUrlObj[process.env.NODE_ENV]