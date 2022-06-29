import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': "application/json;charset=utf-8",
  },
})

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.common['Authorization'] = token;
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  res => {
    let { data, status } = res
    if (status === 200) {
      return data
    }
    return Promise.reject(data)
  },
  error => {
    const { response: { status } } = error;
    switch (status) {
      case 401:
        localStorage.removeItem('token')
        window.location.href = '/login'
        break;
      case 403:
        error.message = '拒绝访问';
        break;
      case 404:
        error.message = '请求错误，未找到该资源';
        break;
      case 500:
        error.message = '系统异常，请稍后重试';
        break;
      case 496:
        // 已被黑
        break;
      default:
        error.message = '系统异常，请稍后重试';
    }
    return Promise.reject(error)
  }
)

export default instance;