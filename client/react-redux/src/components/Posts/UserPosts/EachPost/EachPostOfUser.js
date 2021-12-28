import React, { Fragment, useState } from 'react';
import {
	Card,
	CardActions,
	CardContent,
	Button,
	Typography,
	CardMedia,
	ButtonBase,
	CircularProgress,
} from '@material-ui/core';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../../actions/post.actions';

import { useHistory } from 'react-router-dom';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const EachPostOfUser = ({ post, userId, isLoading }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { name, title, createdAt, message, tags, _id, selectedFile } = post;
	const classes = useStyles();

	const [likes, setLikes] = useState(post.likes);

	const deleteThisPost = async () => {
		dispatch(deletePost(_id));
		// window.location.reload();
		history.push('/');
	};

	const handleLikes = async () => {
		dispatch(likePost(_id));

		if (likes.find((like) => like === userId)) {
			setLikes(likes.filter((like) => like !== userId));
		} else {
			setLikes([...likes, userId]);
		}
	};

	const Likes = () => {
		if (likes.length > 0) {
			return likes.find((like) => like === userId) ? (
				<Fragment>
					<ThumbUpAltIcon fontSize="medium" />
					&nbsp;
					{likes.filter((like) => like[0] === userId) && likes.length === 1
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
		//<Typography>Waiting to charge your info here...</Typography>
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
				<Button size="small" color="primary" disabled={!userId} onClick={handleLikes}>
					{userId ? (
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

				{userId
					? userId === post.creator && (
							<Button className={classes.buttonDelete} fontSize="small" onClick={deleteThisPost}>
								<DeleteIcon />
							</Button>
					  )
					: null}
			</CardActions>
		</Card>
	);
};

export default EachPostOfUser;
