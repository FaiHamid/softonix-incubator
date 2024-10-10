import { jwtDecode } from 'jwt-decode'

export function isTokenExpired (token) {
  try {
    const payload = jwtDecode(token)

    if (payload && payload.exp) {
      return new Date(payload.exp * 1000).toLocaleString() < new Date().toLocaleString()
    } else {
      return 'Термін дії не вказано'
    }
  } catch (error) {
    console.error('Помилка декодування токена:', error)
  }
}
