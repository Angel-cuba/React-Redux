import axios from 'axios';

const url = 'http://localhost:3002/api'

export const fetchPost = () => axios.get(`${url}/read`)

export const fetchCreate = (newPost) => axios.post(`${url}/create`,  newPost )