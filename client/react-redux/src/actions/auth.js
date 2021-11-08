import * as api from '../api/api';
import { AUTH } from '../constants/actionsTypes';

export const signin = (formData, history) => async (dispatch) => {
	history.push('/auth');
	try {
		const { data } = await api.signIn(formData);

		dispatch({ type: AUTH, data });

		history.push('/posts');
	} catch (error) {
		console.log(error);
	}
};

export const signup = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData);

		dispatch({ type: AUTH, data });

		history.push('/posts');
	} catch (error) {
		console.log(error);
	}
};
