import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import { useDispatch } from 'react-redux'
import memories from './image/angel.png'

import Form from './components/Form/Form';
import Posts from './components/Posts/Posts'

import { getPosts } from './actions/post.actions'

import useStyles from './styles'

const App = () => {
    const [ currentId, setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()
 
    useEffect(() => {
      dispatch(getPosts())
    }, [currentId, dispatch])

  return (
    <Container maxWidth="lg" className={classes.container}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.typography} variant="h3" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="" height="60"/>
        
      </AppBar>
      <Grow in>
          <Container className={classes.content}>
              <Grid container direction="column-reverse" justifyContent="space-around" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={12} lg={8}>
                  <Posts setCurrentId={setCurrentId}/> 
                  </Grid>
                  <Grid className={classes.form} item xs={12} sm={6} lg={5}>
                 <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    
                  </Grid>
                  

              </Grid>
          </Container>
      </Grow>
    </Container>
  );
}

export default App;
