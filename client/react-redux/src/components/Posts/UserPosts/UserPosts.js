import { Grid, CircularProgress, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostByUserId } from '../../../actions/post.actions';
import EachPostOfUser from './EachPost/EachPostOfUser';
import useStyles from './styles';
import { useLocation } from 'react-router-dom';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const UserPosts = () => {
	const { isLoading, posts } = useSelector((state) => state.posts);

	const location = useLocation();
	console.log('location----' + location.pathname);

	console.log(posts);

	const classes = useStyles();
	const query = useQuery();
	const page = query.get('page') || 1;

	const [userId, setUserId] = useState();
	console.log(userId);
	const dispatch = useDispatch();
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('profile'));

		setUserId(user.profile._id);
		// dispatch(getPostByUserId(userId));
	}, []);

	useEffect(() => {
		dispatch(getPostByUserId(userId));
	}, [dispatch, userId]);
	if (!posts && !isLoading) return 'No posts';
	return isLoading ? (
		<Grid className={classes.loadingGrid}>
			<CircularProgress />
			<Typography variant="h5">Loading posts...</Typography>
		</Grid>
	) : (
		<>
			<Grid className={posts.length > 4 ? classes.outContainer : classes.lessThan}>
				<Typography variant="h6" className={classes.firstText}>
					This is your personal space
				</Typography>
				<Grid className={classes.mainContainer} container spacing={3} alignItems="stretch">
					{posts.map((post) => (
						<Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
							<EachPostOfUser page={page} isLoading={isLoading} post={post} userId={userId} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</>
	);
};

export default UserPosts;
