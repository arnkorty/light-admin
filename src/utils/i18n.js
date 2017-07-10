const locals = {
  'username-password-invalid': '账号或密码错误'
}
export function t (msg) {
  return locals[msg] || msg
}
