import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/post.actions'

import { useSelector } from 'react-redux'


import useStyles from './styles'

const Form = ({ currentId, setCurrentId }) => {
     const classes = useStyles()
    const dispatch = useDispatch()



    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        // selectedFile: '',
    })
     const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId): null)

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

     const handleSubmit = (e) => {
         e.preventDefault()

         if(currentId){
             dispatch(updatePost(currentId, postData))
         }else{
            dispatch(createPost(postData)) 
         }

         Clear()
          
     }
     const Clear = () => {
            setCurrentId(null)
            setPostData({ 
                creator: '',
                title: '',
                message: '',
                tags: '',
                // selectedFile: ''
            })
     }
     return (
         <Paper className={classes.paper}>
            
              <form autoComplete= "off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a memory</Typography>
                    <TextField 
                    className={classes.textfield}
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({...postData, creator : e.target.value })} />
                     <TextField 
                    className={classes.textfield}
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({...postData, title : e.target.value })} />
                    <TextField 
                    className={classes.textfield}
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({...postData, message : e.target.value })} />
                    <TextField 
                    className={classes.textfield}
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({...postData, tags : e.target.value.split(',') })} /> 
                     {/* <div className={classes.fileInput}>
                        <FileBase
                        type= "file"
                        multiple={false}
                        onDone={(base64) => setPostData({
                            ...postData, 
                            selectedFile: base64
                        })}/>
                    </div>  */}
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth={true}>Save</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={Clear} fullWidth>Clear</Button>
              </form>
         </Paper>
      
     )
}

export default Form