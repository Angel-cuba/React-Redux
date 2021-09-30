import { combineReducers } from 'redux';
import posts from './posts.reducers'
import authReducer from './auth';

export default combineReducers({
     posts,
     authReducer,
})