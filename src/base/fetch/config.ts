/**
 * @file
 */

const queryString = require('qs')
const isDevelop = import.meta.env.MODE == 'development'
const phpConfig = {
  timeout: 5000,
  //区分正式接口和测试接口
  baseURL: isDevelop ? 'test' : 'online',
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    common: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  },
  transformRequest: [
    function (data: any) {
      if (typeof data === 'string') {
        return data
      }
      return queryString.stringify(data)
    },
  ],
}

export default phpConfig
