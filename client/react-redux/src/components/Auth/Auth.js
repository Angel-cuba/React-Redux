import React, { useState } from 'react';
import { Container, Avatar, Paper, Grid, Button, Typography, Icon } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import Input from './Input';

import { signin, signup } from '../../actions/auth';

import useStyles from './styles';

const Auth = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const history = useHistory();

	const [showPassword, setShowPassword] = useState(false);
	const [isSignup, setSignup] = useState(false);

	const initialState = {
		name: '',
		lastname: '',
		email: '',
		password: '',
		confirmpassword: '',
	};
	const [formData, setFormData] = useState(initialState);

	// const isSignup= true;event

	const handleSubmit = (event) => {
		event.preventDefault();
		// console.log(formData);
		if (isSignup) {
			dispatch(signup(formData, history));
		} else {
			dispatch(signin(formData, history));
		}
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const handleShowPassword = () => setShowPassword((presShowPassword) => !presShowPassword);

	const switchMode = () => {
		setSignup((presIsSignup) => !presIsSignup);
		handleShowPassword(false);
	};
	const googleSuccess = async (res) => {
		// const result = res?.profileObj;
		// console.log(res)
		// console.log('TOKENID',res.tokenId);
		console.log('PROFILE', res);
		const profile = res.profileObj;
		const tokenId = res.tokenId;

		try {
			// dispatch(signup(formData, history));

			dispatch({ type: 'AUTH', data: { profile, tokenId } });

			history.push('/');
		} catch (error) {
			console.log(error);
		}
	};

	const googleFailure = (error) => {
		console.log(error);
		console.log('Google Sign In just failed. Please try later');
	};

	return (
		<Container className={classes.container} component="main" maxWidth="xs">
			<Paper className={classes.paper} elevation={6}>
				<Avatar className={classes.avatar}>
					<LockOpenIcon />
				</Avatar>
				<Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
				<form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
					<Grid container spacing={2}>
						{isSignup && (
							<div>
								<Input name="name" label="First Name" handleChange={handleChange} autoFocus />
								<Input name="lastname" label="Last Name" handleChange={handleChange} />
							</div>
						)}
						<Input name="email" label="Email Address" handleChange={handleChange} type="email" />
						<Input
							name="password"
							label="Password"
							handleChange={handleChange}
							type={
								isSignup ? (showPassword ? 'password' : 'text') : showPassword ? 'text' : 'password'
							}
							handleShowPassword={handleShowPassword}
						/>
						{isSignup && (
							<Input
								name="confirmpassword"
								label="Confirm Password"
								handleChange={handleChange}
								type={
									isSignup
										? showPassword
											? 'password'
											: 'text'
										: showPassword
										? 'text'
										: 'password'
								}
								handleShowPassword={handleShowPassword}
							/>
						)}
					</Grid>
					{/* Google Login */}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						{isSignup ? 'Sign Up' : 'Sign In'}
					</Button>
					<GoogleLogin
						clientId="485149763312-v91eb5tetq30bgnaeg70hj62jb5uhtk7.apps.googleusercontent.com"
						render={(renderProps) => (
							<Button
								className={classes.googleButton}
								color="primary"
								onClick={renderProps.onClick}
								fullWidth
								disabled={renderProps.disabled}
								startIcon={<Icon />}
							>
								Google Sign In
							</Button>
						)}
						onSuccess={googleSuccess}
						onFailure={googleFailure}
						// cookiepolicy="single_host_origin"
						cookiePolicy={'single_host_origin'}
					/>

					<Grid container justifyContent="flex-end">
						<Grid item>
							<Button onClick={switchMode}>
								{isSignup
									? 'Already have an account? Sign in'
									: "Don't have an account? Sign up now"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;
