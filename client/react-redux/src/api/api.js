import axios from 'axios';

// const url = 'http://localhost:3002/api'
// const userUrl = 'http://localhost:3002/api/user'

const API = axios.create({ baseURL: 'http://localhost:3002/api' })

API.interceptors.request.use((req) => {
     if(localStorage.getItem('profile')){
          req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
     }
     return req
})


export const fetchPost = () => API.get(`/read`)

export const fetchCreate = (newPost) => API.post(`/create`,  newPost )

export const updatePost = (  id, newPost ) => API.put(`/update/${id}`, newPost )

export const deletePost = ( id ) => API.delete(`/delete/${id}`)

export const likePost = ( id ) => API.patch(`/like/${id}`)


// User parts

export const signIn = (formData) => API.post(`/user/signin`, formData)
export const signUp = (formData) => API.post(`/user/signup`, formData)
