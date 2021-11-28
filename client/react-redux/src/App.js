import React from 'react';
import { Container } from '@material-ui/core';

import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';

const App = () => {
	const classes = useStyles();
	const theme = createTheme({
		palette: {
			background: {
				default: '#29524a',
			},
			secondary: {
				main: 'rgba(0,0,0,.719)',
				background: '#90d5ec',
			},
			action: {
				active: 'red',
				focus: 'rgb(255,255,255)',
				hover: 'yellow',
			},
		},
	});

	const user = JSON.parse(localStorage.getItem('profile'));

	return (
		// <ThemeProvider theme={theme}>
		<Router>
			<Container maxWidth="xl" className={classes.container}>
				<Navbar />
				<Switch>
					<Route path="/" exact component={() => <Redirect to="/posts" />} />
					<Route path="/posts" component={Home} />
					<Route path="/search" component={Home} />
					<Route path="/read/:id" component={PostDetails} />

					{/* component={Home} */}
					<Route
						path="/auth"
						component={() => (!user ? <Auth /> : <Redirect to="posts" />)}
						exact
					/>
				</Switch>
			</Container>
		</Router>
		// </ThemeProvider>
	);
};

export default App;
