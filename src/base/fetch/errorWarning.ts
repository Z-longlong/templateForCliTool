const error: any = {
  // 通用错误吗
  '-1': '内部错误',
  '-6': '对不起，登录信息无效，请重新登录',
  1: '对不起，服务器出错了，请稍后再试',
  2: '系统繁忙，请稍候再试',
}

export default function (res: any) {
  if (res.status >= 400) {
    return
  }
  if (res.data.hasOwnProperty('errno')) {
    const errorMsg = (res.data.errorMsg = error[res.data.errno])
    return Promise.reject(res)
  }
  return res.data
}
