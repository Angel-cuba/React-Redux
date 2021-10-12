import {CREATE_POST, FETCH_ALL, FETCH_BY_SEARCH, UPDATE_POST, UPDATE_LIKE, DELETE_POST , START_LOADING, END_LOADING, FETCH_POST_BY_ID, COMMENT_POST} from '../constants/actionsTypes';
// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = { isLoading: true, posts: [] }, action) => {
     switch (action.type) {
          case START_LOADING:
               return { ...state, isLoading: true };
          case END_LOADING:
               return { ...state, isLoading: false };  

          case FETCH_ALL:
               return {
                    ...state,
                    posts: action.payload.data, 
                    currentPage: action.payload.currentPage,
                    numberOfPages: action.payload.numberOfPages
                    }

          case FETCH_BY_SEARCH:
               return { ...state, posts: action.payload };

          case FETCH_POST_BY_ID:
               return { ...state, post: action.payload}

          case CREATE_POST:
               return {...state, posts: [ ...state.posts, action.payload ]};

          case UPDATE_POST:
               return {...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)};

          case UPDATE_LIKE:      
               return {...state, posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)};

          case COMMENT_POST:
               return {...state, posts: state.posts.map((post) => {
                    if(post._id === action.payload._id){
                         return action.payload;
                    }
                    return post
               })}
          
          case DELETE_POST:
               return {...state, posts: state.posts.filter((post) => post._id !== action.payload._id)};

          default:
               return  state;
     }
}