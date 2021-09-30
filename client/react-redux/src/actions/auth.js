import * as api from '../api/api'
import { AUTH } from '../constants/actionsTypes'

export const signin = ( formData, history) => async (dispatch) =>{
     try {


         history.push('/') 
     } catch (error) {
          console.log(error);
     }
}

export const signup = (formData, history) => async (dispatch) =>{
     try {
          
          history.push('/')
     } catch (error) {
          console.log(error );
     }
}