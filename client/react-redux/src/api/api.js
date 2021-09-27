import axios from 'axios';

const url = 'http://localhost:3002/api'

export const fetchPost = () => axios.get(`${url}/read`)

export const fetchCreate = (newPost) => axios.post(`${url}/create`,  newPost )

export const updatePost = (  id, newPost ) => axios.put(`${url}/update/${id}`, newPost )

export const deletePost = ( id ) => axios.delete(`${url}/delete/${id}`)

export const likePost = ( id ) => axios.patch(`${url}/like/${id}`)