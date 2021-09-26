import React from 'react';
import useStyles from './styles'
import { Card, CardActions, CardContent, CarMedia, Button, Typography, CardMedia } from '@material-ui/core';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import moment from 'moment';

const Post = ({ post }) => {
     console.log(post);
     const classes = useStyles()
     return (
          <Card className={classes.card} >
           <CardMedia className={classes.media} title={post.title}/>
           <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
           </div>
               <div className={classes.overlay2}>
                    <Button styles={{ color: 'white' }} size="small" onClick={() => {}}>
                         <MoreHorizIcon fontSize="default" />
                    </Button>
               </div>
               <div className={`${classes.details} ${classes.title}`}>
                     <Typography variant="body2">{post.message}</Typography>
                      <Typography className={classes.title1} variant="body2">{post.tags.map((tag) => `#${tag} `)}</Typography>
               </div>
          </Card>
     )
}

export default Post;