import axios from 'axios'
const service =axios.create({
    // 执行 npm run dev =》/api 跨域代理  npm run build =>/prod-api
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:5000,// 超时时间
})
service.interceptors.request.use()
service.interceptors.response.use()
export default service
