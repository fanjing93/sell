import axios from 'axios'

const urlMap = {
  development: '/',
  production: 'http://ustbhuangyi.com/sell/'
}
const baseUrl = urlMap[process.env.NODE_ENV]
const CODE_OK = 0

export function get (url) {
  return function (params = {}) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const {code, data} = res.data
      if (code === CODE_OK) {
        return data
      }
    }).catch((e) => {
    })
  }
}
