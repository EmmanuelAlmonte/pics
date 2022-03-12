import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID YM4O9gy0RlC8xV5DwLvFLCEDWI6ApDYBbqyn4BvZSLA' 
  } 
})
