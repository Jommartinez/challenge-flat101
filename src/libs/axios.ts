import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.response.use(
  response => response,
  error => {
    console.error('Axios error:', error)
    return Promise.reject(error)
  },
)

export default instance
