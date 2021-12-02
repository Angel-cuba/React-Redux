import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import useStyles from './styles';
import { getPostById, getPostBySearch } from '../../actions/post.actions';
import Comment from './Comment';

const PostDetails = () => {
	const { post, posts, isLoading } = useSelector((state) => state.posts);

	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getPostById(id));
	}, [dispatch, id]);

	useEffect(() => {
		dispatch(getPostBySearch({ search: 'none', tags: post ? post.tags.join(',') : 'null' }));
	}, [dispatch, post]);

	if (!post) return null;

	if (isLoading) {
		return (
			<div className={classes.loadingSide}>
				<Paper className={classes.loadingPaper} elevation={6}>
					<CircularProgress size="7em" />
				</Paper>
			</div>
		);
	}

	const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

	const openPost = (_id) => {
		history.push(`/read/${_id}`);
	};

	return (
		<div className={classes.allSide}>
			<Paper className={classes.allPaper} elevation={6}>
				<div className={classes.card}>
					<div className={classes.section}>
						<div className={classes.textSection}>
							<Typography variant="h4" component="h2">
								{post.title}
							</Typography>
							<Typography
								gutterBottom
								variant="h6"
								component="h2"
								className={classes.tagsTypography}
							>
								{post.tags
									.map((tag) => `#` + tag)
									.join('')
									.split(' ')}
							</Typography>
							<Typography
								gutterBottom
								variant="body1"
								component="p"
								className={classes.messageTypography}
							>
								{post.message}
							</Typography>
							<Typography variant="h6">Created by: {post.name}</Typography>
							<Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
						</div>

						<div className={classes.imageSection}>
							<img
								className={classes.media}
								src={
									post.selectedFile ||
									'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
								}
								alt={post.title}
							/>
						</div>
						<Divider style={{ margin: '20px 0' }} />
					</div>
					<Comment post={post} />
					<Divider style={{ margin: '20px 0' }} />
				</div>
				{/* Recommended POSTS */}
				{recommendedPosts.length && (
					<div className={classes.recommendedSections}>
						<Typography variant="h5" gutterBottom>
							You might also like:
						</Typography>
						<Divider style={{ margin: '20px 0' }} />
						<Grid container className={classes.recommendedPosts}>
							{recommendedPosts.map(({ title, message, tags, name, likes, selectedFile, _id }) => (
								<Grid
									key={_id}
									className={classes.recommendedPostsMessage}
									onClick={() => openPost(_id)}
								>
									<Typography variant="h6" gutterBottom className={classes.left}>
										{title}
									</Typography>
									<Typography variant="h6" gutterBottom className={classes.tagsTypography}>
										{tags
											.map((t) => `#${t}`)
											.join('')
											.split(' ')}
									</Typography>
									<Typography variant="subtitle2" gutterBottom className={classes.right}>
										{name}
									</Typography>
									<img src={selectedFile} style={{ borderRadius: 5 }} width="200px" alt={title} />
									<Typography variant="subtitle2" gutterBottom>
										{message}
									</Typography>
									<Typography
										style={{ color: '#009ffd' }}
										variant="subtitle1"
										gutterBottom
										className={classes.left}
									>
										Likes: {likes.length}
									</Typography>
									<Divider style={{ margin: '20px 0' }} />
								</Grid>
							))}
						</Grid>
					</div>
				)}
			</Paper>
		</div>
	);
};

export default PostDetails;
