import axios from 'axios'

const BASE_URI = 'http://localhost:4001'

const http = axios.create({
  baseURL: BASE_URI,
  headers: { 'Content-Type': 'application/json' }
})

export default http
