import React, { Fragment } from 'react';
import useStyles from './styles'
import { Card, CardActions, CardContent, CarMedia, Button, Typography, CardMedia, CircularProgress } from '@material-ui/core';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/post.actions'

import { Link, useHistory, useLocation } from 'react-router-dom'


import moment from 'moment';

const Post = ({ post, setCurrentId }) => {
     // console.log(post);
     const classes = useStyles()
     const { name, title, createdAt, message, tags, likes,  _id, selectedFile } = post;
     const dispatch = useDispatch();

     const location = useLocation()

     const user = JSON.parse(localStorage.getItem('profile'))
     
     // console.log('likes----',post.likes.length)
     // console.log(user.profile._id);
     // console.log(user.profile.googleId);

     const Likes = () => {
            if((post.likes.length - 1) === 0){ <MoreHorizIcon/> }
          if(post.likes.length > 0){
               return post.likes.find((like) => like === (user.profile._id || user.profile.googleId)) 

                    ? (
                    <Fragment><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2  ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`
                    // 
                         }</Fragment>
                    ) : (
                         <Fragment>
                            
                         <ThumbUpOffAltIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                         </Fragment>
                    )
          }

           return <Fragment><ThumbUpOffAltIcon fontSize="small"/>&nbsp;Like </Fragment> 
      }
     
     return (
          !post ? <CircularProgress/> : (
               <Card className={classes.card} >
           <CardMedia className={classes.media} title={title} image={selectedFile} component="div"/>
           <div className={classes.overlay}>
                <Typography variant="h6">{name}</Typography>
                <Typography className={classes.color} variant="h6">{title}</Typography>

                <Typography style={{color: '#ce8713'}} variant="body2">{moment(createdAt).fromNow()}</Typography>
           </div>
           {/* <image></image> */}
            {
                         user ?
                         (user.profile.googleId === post.creator || user.profile._id === post.creator)
                              && (
               <div className={classes.overlay2}>
                    <Button 
                    styles={{ color: 'white' }} 
                    size="small" 
                    onClick={() => setCurrentId(_id)}>
                         <MoreHorizIcon fontSize="default" />
                    </Button>
               </div>
                  ) : (
                                   null
                              )
                         }
               <div className={`${classes.details} ${classes.title}`}>
                     
                      <Typography className={classes.title1} variant="body2">{tags.map((tag) => `#${tag} `)}</Typography>
                      <CardContent>
                           <Typography className={classes.title} component="p" variant="subtitle1">{message}</Typography>
                      </CardContent>

                      <CardActions className={classes.cardActions}>
                           <Button size="small" color="primary" disabled={!user} onClick={ () => dispatch(likePost(_id))}>
                               
                                  {user ? < Likes /> : 'Like'}  
                           </Button>
                               
                           
                         {
                         user ?
                         (user.profile.googleId === post.creator || user.profile._id === post.creator)
                              && (
                                   <Button className={classes.buttonDelete} fontSize="small" onClick={ () => dispatch(deletePost(_id))}>
                                <DeleteIcon/>
                                     Delete
                                </Button>
                              ) : (
                                   null
                              )
                         }
                     
                           
                      </CardActions>
                      
               </div>
          </Card>
          )
     )
}

export default Post;