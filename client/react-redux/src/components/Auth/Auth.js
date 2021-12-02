import React, { useState, useEffect } from 'react';
import { Container, Avatar, Paper, Grid, Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Input from './Input';
import { signin, signup } from '../../actions/auth';
import useStyles from './styles';
import { Box } from '@mui/system';
import { Link, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import { AppBar, Toolbar } from '@material-ui/core';

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
		<Container className={classes.outSide} component="div" maxWidth="xl">
			<NavbarInUp isSignup={isSignup} />
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
								<>
									<Input name="name" label="First Name..." handleChange={handleChange} autoFocus />
									<Input name="lastname" label="Last Name..." handleChange={handleChange} />
								</>
							)}
							<Input name="email" label="Email Address" handleChange={handleChange} type="email" />
							<Input
								name="password"
								label="Password"
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
							{isSignup ? 'Sign up' : 'Sign in'}
						</Button>

						<Grid container justifyContent="flex-end">
							<Grid item>
								<Button onClick={switchMode}>
									{isSignup ? (
										<Box
											className={classes.signupDown}
											sx={{
												borderTop: 0.1,
												borderBottom: 0.1,
												borderTopColor: 'rgba(0,0,0,.74)',
												borderBottomColor: 'rgba(0,0,0,.74)',
											}}
										>
											<div className={classes.signinTypography}>
												<Typography className={classes.signinFirst}>A</Typography>
												<Typography>lready have an account?</Typography>
											</div>
											<div className={classes.signinTypography}>
												<Typography variant="inherit" className={classes.signinFirstLetter}>
													S
												</Typography>
												<Typography variant="inherit" className={classes.signinRestLetter}>
													ign in
												</Typography>
											</div>
										</Box>
									) : (
										<Box
											className={classes.signupDown}
											sx={{
												borderTop: 0.1,
												borderBottom: 0.1,
												borderTopColor: 'rgba(0,0,0,.74)',
												borderBottomColor: 'rgba(0,0,0,.74)',
											}}
										>
											<div className={classes.signinTypography}>
												<Typography className={classes.signinFirst}>D</Typography>
												<Typography>on't have an account?</Typography>
											</div>
											<div className={classes.signinTypography}>
												<Typography variant="inherit" className={classes.signinFirstLetter}>
													S
												</Typography>
												<Typography variant="inherit" className={classes.signinRestLetter}>
													ign up now
												</Typography>
											</div>
										</Box>
									)}
								</Button>
							</Grid>
						</Grid>
					</form>
				</Paper>
			</Container>
		</Container>
	);
};

export default Auth;

export const NavbarInUp = ({ isSignup }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();

	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

	const logout = () => {
		setUser(null);
		dispatch({ type: 'LOGOUT' });

		history.push('/');
	};

	useEffect(() => {
		if (user) {
			const token = user.token;
			const decodedToken = decode(token);

			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}

		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

	// console.log(location);

	return (
		<AppBar className={classes.appBar} position="static" color="inherit">
			<Paper className={classes.brandContainer}>
				<Typography
					component={Link}
					to="/"
					className={classes.typography}
					variant="h3"
					align="center"
				>
					Memories
				</Typography>
			</Paper>
			<Toolbar className={classes.toolbar}>
				{user ? (
					<div className={classes.profile}>
						<Typography className={classes.userName} variant="h6">
							Hello, {user.profile.name}
						</Typography>
						{/* <Avatar className={classes.purple} alt={user.profile.givenName} src={user.profile.imageUrl}></Avatar>   */}
						<Avatar
							className={classes.purple}
							alt={user.profile.name}
							src={user.profile.name[0].toUpperCase()}
						></Avatar>
						<Button
							className={classes.logout}
							variant="contained"
							color="secondary"
							onClick={logout}
						>
							Logout
						</Button>
					</div>
				) : (
					<Button component={Link} to="/auth" variant="contained" color="primary">
						{/* <InUpButton isSignup={isSignup} /> */}
						{!isSignup ? 'Sign In' : 'Sign up'}
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};
