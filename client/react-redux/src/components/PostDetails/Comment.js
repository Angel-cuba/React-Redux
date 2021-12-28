import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../actions/post.actions';

import useStyles from './styles';

const Comment = ({ post }) => {
	const classes = useStyles();
	const [comments, setComments] = useState(post.comments);
	const [comment, setComment] = useState('');

	const dispatch = useDispatch();
	const commentRef = useRef();

	const user = JSON.parse(localStorage.getItem('profile'));

	const handleComment = async (e) => {
		const finalComment = `${user.profile.name} ${comment}`;

		const newComment = await dispatch(commentPost(finalComment, post._id));
		setComments(newComment);
		setComment('');

		commentRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className={classes.commentContainer}>
			<div className={classes.innerContainer}>
				<Typography gutterBottom variant="h6" className={classes.commentsTypography}>
					Comments
				</Typography>
				{comments.length !== 0 ? (
					comments.map((c, i) => (
						<Typography key={i} gutterBottom variant="subtitle1">
							<strong>{c.split(': ')[0]}</strong>
							{c.split(':')[1]}
						</Typography>
					))
				) : (
					<div>
						<p>No comments</p>
					</div>
				)}
				<div ref={commentRef} />
			</div>

			{user && (
				<div className={classes.writeComment}>
					<Typography gutterBottom variant="h6" className={classes.commentsTypography}>
						Write a comment
					</Typography>
					<TextField
						fullWidth
						maxRows={4}
						variant="outlined"
						label="Write a comment"
						multiline
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<Button
						style={{ marginTop: '10px' }}
						fullWidth
						variant="contained"
						disabled={!comment}
						onClick={handleComment}
						color="primary"
					>
						Send Comment
					</Button>
				</div>
			)}
		</div>
	);
};

export default Comment;
