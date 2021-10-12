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

	
// const {title} = post

	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();
	const { id } = useParams();

     useEffect(() => {
          dispatch(getPostById(id))
     },[id])

	useEffect(() => {
		dispatch(getPostBySearch({ search: 'none', tags: post ? post.tags.join(',') : 'null' }))
	}, [post])

	if(!post) return null

	if(isLoading) {
		return( <Paper className={classes.loadingPaper} elevation={6}>
			<CircularProgress size="7em"/>
		</Paper>)
	}


	const recommendedPosts = posts.filter(({ _id}) => _id !== post._id)

	const openPost = (_id) => {
		history.push(`/read/${_id}`)
	}

	return (
		// <div className={classes.test}>
		//  <h1>hoalanjsa  oav</h1>
		// </div>
		<Paper style={{ padding: '20px', borderRadius: '15px', marginTop: '20px'}} elevation={6}>
			<div className={classes.card}>
				<div className={classes.section}>
					<Typography variant="h3" component="h2">
						{post.title}
					</Typography>
					<Typography gutterBottom variant="h6" color="textSecondary" component="h2">
						{post.tags.map((tag) => `#${tag} `)}
					</Typography>
					<Typography gutterBottom variant="body1" component="p">
						{post.message}
					</Typography>
					<Typography variant="h6">Created by: {post.name}</Typography>
					<Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
					<Divider style={{ margin: '20px 0' }} />
					
				
					<Comment post={post} />
					<Divider style={{ margin: '20px 0' }} />
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
			</div>
               {/* Recommended POSTS */}
			{recommendedPosts.length && (
				<div className={classes.section}>
		{/* {console.log(recommendedPosts)} */}
					<Typography variant="h5" gutterBottom>You might also like:</Typography>
					<Divider/>
					<Grid container className={classes.recommendedPosts}>
						{recommendedPosts.map(({ title, message, name, likes, selectedFile, _id }) => 
							<Grid key={_id}
								style={{ margin: '20px',
										cursor: 'pointer',
										// maxWidth: '300px'
											}}
								onClick={() => openPost(_id)}
							>
								<Typography variant="h6" gutterBottom>{title}</Typography>
								<Typography variant="subtitle2" gutterBottom>{name}</Typography>
								<Typography variant="subtitle2" gutterBottom>{message}</Typography>
								<Typography variant="subtitle1" gutterBottom>Likes: {likes.length}</Typography>
								<img src={selectedFile} width="200px" />

								
							</Grid>
						)}
					</Grid>
				
					</div>
			)}
		</Paper>
	);
};

export default PostDetails;
