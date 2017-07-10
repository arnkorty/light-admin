const LOADINGID = 'preloader'
const HIDE_CLS_NAME = 'hide'
const TOKEN_KEY = 'Authorization'
let PRELOADERS = []
export const EMAIL_REGEXP = new RegExp('^([^@\\s]+)@((?:[a-z0-9]+\\.)+[a-z]{2,})$', 'i')
export { http } from './http'
export { t } from './i18n'
export { allRoutes, getCurrentMenus } from './menus'

export function preLoading (loading = true, isPop = true, loaderEle = null) {
  if (!loaderEle) {
    loaderEle = document.getElementById(LOADINGID)
    if (!loaderEle) {
      return
    }
  }
  if (loading) {
    PRELOADERS.push(1)
    removeClass(loaderEle, HIDE_CLS_NAME)
  } else {
    setTimeout(() => {
      if (isPop) {
        PRELOADERS.pop()
      }
      if (PRELOADERS.length === 0) {
        addClass(loaderEle, HIDE_CLS_NAME)
      }
    }, 1000)
  }
}

export function addClass (ele, clsName) {
  if (!hasClass(ele, clsName)) {
    ele.className = `${ele.className} ${clsName}`
  }
}
export function removeClass (ele, clsName) {
  if (hasClass(ele, clsName)) {
    ele.className = ele.className.replace(new RegExp(`(^|\\s+)${clsName}($|\\s+)`, 'g'), ' ').trim()
  }
}
export function toggleClass (ele, clsName) {
  if (hasClass(ele, clsName)) {
    removeClass(ele, clsName)
  } else {
    addClass(ele, clsName)
  }
}

export function hasClass (ele, clsName) {
  if (ele.className.length === 0) {
    return false
  }
  return (new RegExp(`(^|\\s)${clsName}(\\s|$)`)).test(ele.className)
}

export function validate (val, rules) {
  if (!rules) {
    return 'OK'
  }
  if (rules.required && (!val || val.length === 0)) {
    return '必填，不能为空'
  }
  if (rules.withRegex && val && !rules.withRegex.test(val)) {
    return '格式不对'
  }
  if (rules.collection && !rules.includes(val)) {
    return '格式不对'
  }
  return 'OK'
}

export function isValidate (obj, rules, errors = null) {
  let valid = true
  for (let k in obj) {
    let error = validate(obj[k], rules[k])
    if (error !== 'OK') {
      if (errors) {
        errors[k] = error
      }
      valid = false
    } else {
      if (errors) {
        errors[k] = null
      }
    }
  }
  return valid
}

export function saveToken (token, expired = null) {
  localStorage.setItem(TOKEN_KEY, token)
  if (expired) {
    localStorage.setItem(TOKEN_KEY + '_expired', expired)
  }
}
export function removeToken () {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(TOKEN_KEY + '_expired')
}

export function isLogin () {
  if (getToken()) {
    return true
  }
}

export function getToken () {
  const token = localStorage.getItem(TOKEN_KEY)
  if (token) {
    /* eslint-disable */
    const expired = localStorage.getItem(TOKEN_KEY + '_expired')
    // check expired
    return token
  }
}

let currentClickObject = null
export function setCurrentClick (obj) {
  currentClickObject = obj
}
export function compareCurrentClick (obj) {
  return currentClickObject === obj
}
