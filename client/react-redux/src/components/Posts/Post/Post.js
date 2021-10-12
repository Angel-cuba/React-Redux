import React, { Fragment, useState } from 'react';
import useStyles from './styles';
import {
	Card,
	CardActions,
	CardContent,
	Button,
	Typography,
	CardMedia,
	CircularProgress,
	ButtonBase
} from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/post.actions';

import moment from 'moment';


const Post = ({ post, setCurrentId }) => {
	// console.log(post);
	const classes = useStyles();
	const { name, title, createdAt, message, tags,  _id, selectedFile } = post;
	const dispatch = useDispatch();
	const history = useHistory()

	const [ likes, setLikes ] = useState(post.likes)

	const handleLikes = async () => {
		dispatch(likePost(_id))

	 if (likes.find((like) => like === (user.profile._id || user.profile.googleId)) ){
		 setLikes(likes.filter((like) => like !== (user.profile._id || user.profile.google)))
	 }else{
		 setLikes([ ...likes , user.profile._id || user.profile.googleId])
	 }
		
		
		
		}

	const user = JSON.parse(localStorage.getItem('profile'));

	// console.log('likes----',likes.length)
	// console.log(user.profile._id);
	// console.log(user.profile.googleId);

	const Likes = () => {
		if (likes.length - 1 === 0) {
			 return <MoreHorizIcon />;
			//return (<h1>No</h1>)
		}
		if (likes.length > 0) {
			return likes.find((like) => like === (user.profile._id || user.profile.googleId)) ? (
				<Fragment>
					<ThumbUpAltIcon fontSize="small" />
					&nbsp;
					{
						likes.length > 2
							? `You and ${likes.length - 1} others`
							: `${likes.length} like${likes.length > 1 ? 's' : ''}`
						//
					}
				</Fragment>
			) : (
				<Fragment>
					<ThumbUpOffAltIcon fontSize="small" />
					&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
				</Fragment>
			);
		}

		return (
			<Fragment>
				<ThumbUpOffAltIcon fontSize="small" />
				&nbsp;Like{' '}
			</Fragment>
		);
	};

	const openPost = () => {
		history.push(`/read/${post._id}`)
	}

	return !post ? (
		<CircularProgress />
	) : (
		<Card className={classes.card} raised elevation={6}>
			

			
	

			<CardMedia className={classes.media} title={title} image={selectedFile} component="div" />
			<div className={classes.overlay}>
				<Typography variant="h6">{name}</Typography>
				<Typography className={classes.color} variant="h6">
					{title}
				</Typography>

				<Typography style={{ color: '#ce8713' }} variant="body2">
					{moment(createdAt).fromNow()}
				</Typography>
			</div>
				

			{/* <image></image> */}
			{user
				? (user.profile.googleId === post.creator || user.profile._id === post.creator) && (
						<div className={classes.overlay2}>
							<Button styles={{ color: 'white' }} size="small" onClick={() => setCurrentId(_id)}>
								<MoreHorizIcon fontSize="default" />
							</Button>
						</div>
				  )
				: null}
				
<ButtonBase
				className={classes.buttonBase}
				onClick={openPost}
				>
			<div className={classes.details}>
				
					
				
				<Typography className={classes.tags} variant="body2">
					{tags.map((tag) => `#${tag.trim()} `)}
				</Typography>
				
				<CardContent>
					<Typography className={classes.title} component="p" variant="subtitle1">
						{message}
					</Typography>
				</CardContent>
				</div>
			</ButtonBase>
				
				<CardActions className={classes.cardActions}>
					<Button
						size="small"
						color="primary"
						disabled={!user}
						// onClick={handleLikes}
						onClick={handleLikes}
					>
						{user ? (
							<Likes />
						) : likes.length ? (
							`This post has ${likes.length} likes`
						) : (
							<p style={{ color: 'white', textAlign: 'left' }}>
								This post does not have any likes{' '}
								<span role="img" arial-label="likes">
									😢
								</span>{' '}
							</p>
						)}
					</Button>

					{user
						? (user.profile.googleId === post.creator || user.profile._id === post.creator) && (
								<Button
									className={classes.buttonDelete}
									fontSize="small"
									onClick={() => dispatch(deletePost(_id))}
								>
									<DeleteIcon />
									Delete
								</Button>
						  )
						: null}
				</CardActions>
			
		</Card>
	);
};

export default Post;
