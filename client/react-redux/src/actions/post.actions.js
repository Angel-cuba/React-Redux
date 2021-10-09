import {
	CREATE_POST,
	FETCH_ALL,
     FETCH_BY_SEARCH,
	UPDATE_POST,
	UPDATE_LIKE,
	DELETE_POST,
} from '../constants/actionsTypes';
import * as api from '../api/api';

//Actions Creators
export const getPosts = (page) => async (dispatch) => {
	try {
		const { data } = await api.fetchPost(page);
		// console.log(data)
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const getPostBySearch = (searchQuery) => async (dispatch) => {
	try {
		const {data: { data }} = await api.fetchPostBySearch(searchQuery);
		// console.log(data)
		dispatch({ type: FETCH_BY_SEARCH, payload:  data  });
	} catch (error) {
		console.log(error);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.fetchCreate(post);

		dispatch({ type: CREATE_POST, payload: data });
				await api.fetchPost()	
	} catch (error) {
		console.log(error);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);
				
					
		dispatch({ type: UPDATE_POST, payload: data });
				await api.fetchPost()	
	} catch (error) {
		console.log(error);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);

		dispatch({ type: UPDATE_LIKE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);

		dispatch({ type: DELETE_POST, payload: id });
		await api.fetchPost();
	} catch (error) {
		console.log(error);
	}
};
