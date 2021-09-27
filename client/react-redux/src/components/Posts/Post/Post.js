import React from 'react';
import useStyles from './styles'
import { Card, CardActions, CardContent, CarMedia, Button, Typography, CardMedia, CircularProgress } from '@material-ui/core';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/post.actions'

import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
     // console.log(post);
     const classes = useStyles()
     const { creator, title, createdAt, message, tags, likeCount,  _id } = post;
     const dispatch = useDispatch();
     
     return (
          !post ? <CircularProgress/> : (
               <Card className={classes.card} >
           <CardMedia className={classes.media} title={title} component='img'/>
           <div className={classes.overlay}>
                <Typography variant="h6">{creator}</Typography>
                <Typography className={classes.color} variant="h6">{title}</Typography>

                <Typography style={{color: '#ce8713'}} variant="body2">{moment(createdAt).fromNow()}</Typography>
           </div>
               <div className={classes.overlay2}>
                    <Button 
                    styles={{ color: 'white' }} 
                    size="small" 
                    onClick={() => setCurrentId(_id)}>
                         <MoreHorizIcon fontSize="default" />
                    </Button>
               </div>
               <div className={`${classes.details} ${classes.title}`}>
                     
                      <Typography className={classes.title1} variant="body2">{tags.map((tag) => `#${tag} `)}</Typography>
                      <CardContent>
                           <Typography className={classes.title} variant="h5" gutterBottom>{message}</Typography>
                      </CardContent>

                      <CardActions className={classes.cardActions}>
                           <Button size="small" color="primary" onClick={ () => dispatch(likePost(_id))}>
                                <ThumbUpAltIcon/>
                                {likeCount}
                           </Button>
                           <Button className={classes.buttonDelete} fontSize="small" onClick={ () => dispatch(deletePost(_id))}>
                                <DeleteIcon/>
                                Delete
                           </Button>
                      </CardActions>
                      
               </div>
          </Card>
          )
     )
}

export default Post;