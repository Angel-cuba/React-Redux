import React, { Fragment, useEffect, useState } from 'react';
import useStyles from './styles';
import {
	Card,
	CardActions,
	CardContent,
	Button,
	Typography,
	CardMedia,
	CircularProgress,
	ButtonBase,
} from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/post.actions';

import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('profile'));

		setUser(user);
	}, []);

	const classes = useStyles();
	const { name, title, createdAt, message, tags, _id, selectedFile } = post;
	const dispatch = useDispatch();
	const history = useHistory();

	const [likes, setLikes] = useState(post.likes);
	const [user, setUser] = useState();

	const handleLikes = async () => {
		dispatch(likePost(_id));

		if (likes.find((like) => like === user.profile._id)) {
			setLikes(likes.filter((like) => like !== user.profile._id));
		} else {
			setLikes([...likes, user.profile._id]);
		}
	};

	const Likes = () => {
		if (likes.length > 0) {
			return likes.find((like) => like === user.profile._id) ? (
				<Fragment>
					<ThumbUpAltIcon fontSize="medium" />
					&nbsp;
					{likes.filter((like) => like[0] === user.userId) && likes.length === 1
						? 'You liked'
						: `You and ${likes.length} others`}
				</Fragment>
			) : (
				<Fragment>
					<ThumbUpAltIcon fontSize="medium" />
					&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}
				</Fragment>
			);
		}

		if (likes.length === 0) {
			return (
				<Fragment>
					<ThumbUpOffAltIcon fontSize="small" />
					&nbsp;0 likes{' '}
				</Fragment>
			);
		}
	};

	const openPost = () => {
		history.push(`/read/${post._id}`);
	};

	return !post ? (
		<CircularProgress />
	) : (
		<Card className={classes.card} raised elevation={6}>
			<CardMedia className={classes.media} title={title} image={selectedFile} component="div" />
			<div className={classes.overlay}>
				<Typography variant="h6">{name}</Typography>
				<Typography className={classes.colorTitle} variant="h6">
					{title}
				</Typography>

				<Typography className={classes.dateData} variant="body2">
					{moment(createdAt).format('ddd, MMM Do, h:mm a ')}
				</Typography>
			</div>

			{user
				? user.profile._id === post.creator && (
						<div className={classes.overlay2}>
							<Button styles={{ color: 'white' }} size="small" onClick={() => setCurrentId(_id)}>
								<MoreHorizIcon fontSize="default" />
							</Button>
						</div>
				  )
				: null}

			<ButtonBase className={classes.buttonBase} onClick={openPost}>
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
				<Button size="small" color="primary" disabled={!user} onClick={handleLikes}>
					{user ? (
						<Likes />
					) : likes.length ? (
						<p style={{ color: '#009ffd' }}>
							{likes.length} {likes.length === 1 ? 'like' : 'likes'}
						</p>
					) : (
						<p style={{ textAlign: 'left', color: '#b1bfd8' }}>
							This post does not have any likes{' '}
							<span role="img" arial-label="likes">
								😢
							</span>{' '}
						</p>
					)}
				</Button>

				{user
					? user.profile._id === post.creator && (
							<Button
								className={classes.buttonDelete}
								fontSize="small"
								onClick={() => dispatch(deletePost(_id))}
							>
								<DeleteIcon />
							</Button>
					  )
					: null}
			</CardActions>
		</Card>
	);
};

export default Post;
