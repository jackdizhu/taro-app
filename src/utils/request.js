import Taro from '@tarojs/taro';

function showErrorToast (msg) {
  Taro.showToast({
    title: msg
  })
}
/**
 * request
 */
function request(url, data = {}, method = "GET") {
  return new Promise(function(resolve, reject) {
    Taro.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Content-Type': 'application/json',
        'Token': Taro.getStorageSync('token')
      },
      success: function(res) {
        if (res.statusCode == 200) {
          if(res.data.errno == 0) {
            resolve(res.data.data);
          } else {
            showErrorToast(res.data.errmsg);
            reject(res.data.errmsg);
          }
        } else {
          reject(res.errMsg);
        }
      },
      fail: function(err) {
        reject(err)
      }
    })
  });
}

request.get = (url, data) => {
  return request(url, data, 'GET');
}

request.post = (url, data) => {
  return request(url, data, 'POST');
}

export default request;
