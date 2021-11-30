import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import decode from 'jwt-decode';

import { AppBar, Avatar, Typography, Toolbar, Button, Paper } from '@material-ui/core';

import useStyles from './styles';

const Navbar = () => {
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
	console.log(location.pathname.slice(6));

	return (
		<AppBar
			className={location.pathname === '/auth' ? classes.appBarHidden : classes.appBar}
			position="static"
			color="inherit"
		>
			<Paper className={classes.brandContainer}>
				<Typography
					component={Link}
					to="/"
					className={classes.typography}
					variant="h3"
					align="center"
				>
					{location.pathname === '/userposts' ? 'Back' : 'Memories '}
				</Typography>
			</Paper>
			<Toolbar className={classes.toolbar}>
				{user ? (
					<div className={classes.profile}>
						<Typography className={classes.userName} variant="h6">
							Hello, {user.profile.name}
						</Typography>

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
						Sign In
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
