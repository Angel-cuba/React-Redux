import {CREATE_POST, FETCH_ALL, FETCH_BY_SEARCH, UPDATE_POST, UPDATE_LIKE, DELETE_POST } from '../constants/actionsTypes';
// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = [], action) => {
     switch (action.type) {

          case FETCH_ALL:
               return {
                    ...state,
                    posts: action.payload.data, 
                    currentPage: action.payload.currentPage,
                    numberOfPages: action.payload.numberOfPages
                    }

          case FETCH_BY_SEARCH:
               return { ...state, posts: action.payload };

          case CREATE_POST:
               return [... state, action.payload];

          case UPDATE_POST:
               return state.map((post) => post._id === action.payload._id ? action.payload : post);

          case UPDATE_LIKE:      
               return state.map((post) => post._id === action.payload._id ? action.payload : post);
          
          case DELETE_POST:
               return state.filter((post) => post._id !== action.payload._id)

          default:
               return state;
     }
}