import {
	START_LOADING,
	END_LOADING,
	CREATE_POST,
	FETCH_ALL,
	FETCH_BY_SEARCH,
	FETCH_POST_BY_ID,
	FETCH_POST_BY_USER_ID,
	UPDATE_POST,
	UPDATE_LIKE,
	DELETE_POST,
	COMMENT_POST,
} from '../constants/actionsTypes';
import * as api from '../api/api';

//Actions Creators
export const getPostById = (id) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });

		const { data } = await api.fetchPostById(id);

		dispatch({ type: FETCH_POST_BY_ID, payload: data });
		dispatch({ type: END_LOADING });
	} catch (error) {
		console.log(error.message);
	}
};
export const getPostByUserId = (id) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });

		const { data } = await api.fetchPostByUserId(id);
		dispatch({ type: FETCH_POST_BY_USER_ID, payload: data });
		dispatch({ type: END_LOADING });
	} catch (error) {
		console.log(error.message);
	}
};

export const getPosts = (page) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });

		const { data } = await api.fetchPost(page);
		dispatch({ type: FETCH_ALL, payload: data });
		dispatch({ type: END_LOADING });
	} catch (error) {
		console.log(error.message);
	}
};

export const getPostBySearch = (searchQuery) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });

		const {
			data: { data },
		} = await api.fetchPostBySearch(searchQuery);
		dispatch({ type: FETCH_BY_SEARCH, payload: data });
		dispatch({ type: END_LOADING });
	} catch (error) {
		console.log(error);
	}
};

export const createPost = (post, history) => async (dispatch) => {
	try {
		dispatch({ type: START_LOADING });

		const { data } = await api.fetchCreate(post);

		history.push(`/read/${data._id}`);
		// history.push('/read');

		dispatch({ type: CREATE_POST, payload: data });
		await api.fetchPost();
	} catch (error) {
		console.log(error);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);

		dispatch({ type: UPDATE_POST, payload: data });
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

export const commentPost = (value, id) => async (dispatch) => {
	try {
		const { data } = await api.commentPost(value, id);

		dispatch({ type: COMMENT_POST, payload: data });

		return data.comments;
	} catch (error) {
		console.log(error);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		// dispatch({ type: START_LOADING });
		await api.deletePost(id);

		dispatch({ type: DELETE_POST, payload: id });

		await api.fetchPost();
		// dispatch({ type: END_LOADING });
	} catch (error) {
		console.log(error);
	}
};
