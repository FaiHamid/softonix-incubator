import { routeNames, router } from '@/router'

export const useAuthStore = defineStore('authStore', () => {
  const accessToken = ref(localStorage.getItem('si-token'))
  const refreshToken = ref<IRefreshToken>({ refresh_token: null })
  const hasReloaded = ref(false)

  // Для перевірки оновлення токена треба підставити працюючий refresh_token (можна взяти з цієї сессії)
  // замість null. Також в браузері в Application поставити цей просрочений токен:
  // eyJhbGciOiJIUzI1NiIsImtpZCI6IjZrbFQ1dVhtMnVuTVhsbE8iLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3BwbWdsZW1menh4b3lnbHNheGRuLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIwOWYwYTAzZS01OWVkLTRiNDYtYmVhMS1mNGU5NGQ1NmI1ZWEiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI4Mjk5NjU4LCJpYXQiOjE3MjgyOTYwNTgsImVtYWlsIjoidGdpdWppb0BnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsIjoidGdpdWppb0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiMDlmMGEwM2UtNTllZC00YjQ2LWJlYTEtZjRlOTRkNTZiNWVhIn0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MjgyOTYwNTh9XSwic2Vzc2lvbl9pZCI6IjY3ZWFjMGNiLTY5OTUtNDEyYy04ZmJkLTYzYTM1OTQ5MTJlMSIsImlzX2Fub255bW91cyI6ZmFsc2V9.ZuAOQFFcq-gHEZG9ipwpztzBfzCT9H7wSR59X_Mo5NE

  function setToken (token: string) {
    accessToken.value = token
    localStorage.setItem('si-token', token)
  }

  function login (payload: ILoginRequest) {
    return authService.login(payload)
      .then((res) => {
        setToken(res.access_token)
        console.log(res)
        refreshToken.value.refresh_token = res.refresh_token
      })
  }

  function register (payload: ILoginRequest) {
    return authService.register(payload)
      .then((res) => {
        setToken(res.access_token)
        refreshToken.value = res.refresh_token
      })
  }

  function handleRefreshToken () {
    authService.refreshToken(refreshToken.value)
      .then(res => {
        setToken(res.access_token)
        refreshToken.value = res.refresh_token

        if (!hasReloaded.value) {
          hasReloaded.value = true
          window.location.href = router.resolve(routeNames.contacts).href
        }
      }).catch(error => {
        console.error('Помилка при оновленні токена:', error)
      })
      .finally(() => {
        isRefresh.value = false
      })
  }

  function logout () {
    localStorage.removeItem('si-token')
    window.location.href = router.resolve(routeNames.login).href
  }

  return {
    accessToken,
    login,
    register,
    handleRefreshToken,
    logout
  }
})
