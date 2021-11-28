import React, { useState } from 'react';
import { Container, Avatar, Paper, Grid, Button, Typography } from '@material-ui/core';


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



	const handleSubmit = (event) => {
		event.preventDefault();
	
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

	return (
		<Container className={classes.container} component="main" maxWidth="xs">
			<Paper className={classes.paper} elevation={6}>
				<Avatar className={classes.avatar}>
					<LockOpenIcon />
				</Avatar>
				<Typography variant="h5" className={classes.upinTypography}>
					{isSignup ? 'Sign Up' : 'Sign In'}
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
					<Grid container spacing={2}>
						{isSignup && (
							<div>
								<Input name="name" label="First Name..." handleChange={handleChange} autoFocus />
								<Input name="lastname" label="Last Name..." handleChange={handleChange} />
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
				
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						{isSignup ? 'Sign Up' : 'Sign In'}
					</Button>
				
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
