import axios from 'axios'

const baseURL_dev = "http://localhost:8080"
// const baseURL_pro = "",
// const baseURL_test = ""
const fetch = axios.create({
    baseURL: baseURL_dev,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});

// 封装请求拦截器
fetch.interceptors.request.use((config) => {
    // 在这里做一些检测或者包装等处理
    // console.log('请求拦截', config)
    // 鉴权 token添加
    config.headers.Authorization = localStorage.getItem('token') || ''
    return config
  })

// 封装响应拦截器
fetch.interceptors.response.use( (response)=> {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data && response.data.err==0) {
        return response.data
      } else {
        console.log('网络异步，请稍后再试')
      }
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
export default fetch