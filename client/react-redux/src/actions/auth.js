import * as api from '../api/api';
import { AUTH } from '../constants/actionsTypes';
import Swal from 'sweetalert2';

export const signin = (formData, history) => async (dispatch) => {
	history.push('/auth');
	try {
		const { data } = await api.signIn(formData);

		dispatch({ type: AUTH, data });

		history.push('/posts');
	} catch (error) {
		if (error.message === 'Request failed with status code 404') {
			// alert('los dos estan mal ...404');
			Swal.fire({
				titleText: 'Some error occurred while trying to sign in 👓',
				text: 'Something is wrong or missing. Please try again.',
				icon: 'error',
				timer: 4000,
				timerProgressBar: true,
			});
		}
		if (error.message === 'Request failed with status code 403') {
			Swal.fire({
				titleText: 'Seems that maybe your password is incorrect 👓',
				text: 'Check it again and try again.',
				icon: 'error',
				timer: 4000,
				timerProgressBar: true,
			});
		}
		if (error.message === 'Network Error') {
			Swal.fire({
				titleText: 'Sorry, we have some network issues 🛰️',
				text: 'Please, wait a little and try again 🚀',
				icon: 'info',
				timer: 8000,
				timerProgressBar: true,
			});
		}
	}
};

export const signup = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData);

		dispatch({ type: AUTH, data });
		Swal.fire({
			titleText: 'Has been nice to have you around',
			text: 'Please, wait a little and try again 🚀',
			icon: 'success',
			timer: 2000,
			timerProgressBar: true,
		});

		history.push('/posts');
	} catch (error) {
		console.log(error);
		if (error.message === 'Request failed with status code 403') {
			Swal.fire({
				titleText: 'Seems like your password does not match 🔐.',
				text: 'Check it again and try again 🥸.',
				icon: 'error',
				timer: 4000,
				timerProgressBar: true,
			});
		}
	}
};
