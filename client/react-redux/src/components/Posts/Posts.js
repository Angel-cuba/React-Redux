import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';

import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Posts = ({ setCurrentId }) => {
	const { posts, isLoading } = useSelector((state) => state.posts);
	const classes = useStyles();
	console.log(posts);

	if (!posts && !isLoading) return 'No posts';
	return isLoading ? (
		<Grid className={classes.circularProgress}>
			<CircularProgress />
		</Grid>
	) : (
		<Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
			{/* alignItems="stretch"  */}
			{posts.map((post) => (
				<Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
					<Post post={post} setCurrentId={setCurrentId} />
				</Grid>
			))}
		</Grid>
	);
};

export default Posts;
