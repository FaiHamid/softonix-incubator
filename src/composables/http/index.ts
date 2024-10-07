import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    apikey: import.meta.env.VITE_API_KEY
  }
})

instance.interceptors.request.use(
  config => {
    const { accessToken } = useAuthStore()

    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`
    }

    return config
  }
)

instance.interceptors.response.use(
  res => res.data,
  error => {
    const { handleRefreshToken } = useAuthStore()

    if (error.response.status === 401) {
      handleRefreshToken()
      return Promise.resolve()
    }

    return Promise.reject(error)
  }
)

export const useHttp = instance
