import { preLoading, getToken } from './'
import { Message } from 'iview'
import qs from 'qs'

const SHOW_LOADER_FOR_REQUEST = true
const API_URL_BASE = '/api/sdao/v1'

let REQUEST_CONTAINER = []

function requestLoading (flag, commit = null, payload = {}) {
  if (flag) {
    REQUEST_CONTAINER.push(1)
    if (REQUEST_CONTAINER.length === 1) {
      if (commit) {
        commit('common/ADD_REQUEST', null, {root: true})
      }
      if (SHOW_LOADER_FOR_REQUEST) {
        preLoading(true)
      }
    }
  } else {
    REQUEST_CONTAINER.pop()
    if (REQUEST_CONTAINER.length === 0) {
      commit('common/DONE_REQUEST', payload)
    }
    if (SHOW_LOADER_FOR_REQUEST) {
      preLoading(false)
    }
  }
}

export function http (commit, url, method = 'get', params = {}) {
  requestLoading(true, commit)
  return fetch(
    buildRequestURL(API_URL_BASE + url, method, params),
    buildOptions(method, params)
  ).then(checkStatus(commit))
  .then(parseJSON)
  .then(res => {
    if (res.status === 'success') {
      Message.success('成功')
    } else if (res.error) {
      Message.error({content: res.error})
      throw new Error(res.error)
    }
    return res
  })
}
// ['get', 'post', 'put', 'delete', 'patch'].forEach((method) => {
  // (function (method) {
    // api[method] = (store, url, params) => api(store, url, method, params)
  // })(method)
// })

export function isRequest () {
  return REQUEST_CONTAINER.length > 0
}

function buildRequestURL (url, method, params) {
  if (method !== 'get') {
    return url
  }
  if (params && Object.keys(params).length > 0) {
    const query = qs.stringify(params)
    if (url.indexOf('?') > -1) {
      url = url + query
    } else {
      url = url + '?' + query
    }
  }
  console.log(url)
  return url
}

function buildHeaders () {
  let headers = {
    'Content-Type': 'application/json'
  }
  const token = getToken()
  if (token) {
    headers['Authorization'] = 'Bearer ' + token
  }
  return headers
}

function buildOptions (method, params) {
  let options = {
    method: method,
    headers: buildHeaders()
  }
  if (method !== 'get' && params && Object.keys(params).length > 0) {
    options['body'] = JSON.stringify(params)
  }
  return options
}

function parseJSON (response) {
  return response.json()
}

function checkStatus (commit) {
  return async (response) => {
    if (response.status >= 200 && response.status < 300) {
      requestLoading(false, commit)
      return response
    } else {
      var error = new Error(response.statusText)
      error.msg = await response.json()
      Message.error({content: error.msg})
      requestLoading(false, commit, error.msg)
      // 全局处理错误
      // alert(error.msg.error)
      error.response = response
      throw error
    }
  }
}
