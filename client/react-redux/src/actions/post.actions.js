import * as api from '../api/api'


//Actions Creators
export const getPosts = () => async (dispatch) => {

     try {
          const { data } = await api.fetchPost()
           dispatch({ type: 'FETCH_ALL', payload: data })

     } catch (error) {
          console.log(error.message)
     }
   
}

export const createPost = (post) => async (dispatch) => {
     try {
          const { data } = await api.fetchCreate(post)

          dispatch({ type: 'CREATE_POST', payload: data })
     } catch (error) {
          console.log(error)
     }
}