export const TOKEN_KEY = "auth-token"
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const login = token => { 
  localStorage.setItem(TOKEN_KEY, token)
  window.location.replace('/mercado')
}
export const profile = token => { 
  localStorage.setItem(TOKEN_KEY, token)
  window.location.replace('/home')
}
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  window.location.replace('/conectar')
}