import React from 'react';
import { Container } from '@material-ui/core';

import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
	const classes = useStyles();

	const user = JSON.parse(localStorage.getItem('profile'));

	return (
		<Router>
			<Container maxWidth="xl" className={classes.container}>
				<Navbar />
				<Switch>
					<Route path="/" exact component={() => <Redirect to="/posts" />} />
					<Route path="/posts" component={Home} />
					<Route path="/search" component={Home} />
					<Route path="/read/:id" component={PostDetails} />

					<Route
						path="/auth"
						component={() => (!user ? <Auth /> : <Redirect to="posts" />)}
						exact
					/>
				</Switch>
			</Container>
		</Router>
	);
};

export default App;
