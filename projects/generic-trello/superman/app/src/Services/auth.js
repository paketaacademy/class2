export const TOKEN_KEY = "auth-superman"
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const login = token => { 
  localStorage.setItem(TOKEN_KEY, token)
  window.location.replace('/perfil')
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  window.location.replace('/')
}