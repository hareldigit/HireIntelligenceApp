import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://localhost:44340/api',
})

export default instance
