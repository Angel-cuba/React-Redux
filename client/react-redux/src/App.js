import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import { useDispatch } from 'react-redux'
import memories from './image/angel.png'

import Form from './components/Form/Form';
import Posts from './components/Posts/Posts'

import { getPosts } from './actions/post.actions'

import useStyles from './styles'

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPosts())
    }, [dispatch])

  return (
    <Container maxWidth="lg" className={classes.container}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.typography} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="" height="60"/>
      </AppBar>
      <Grow in>
          <Container>
              <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                  <Grid item xs={12} sm={7}>
    
                    <Posts/>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Form/>
                  </Grid>

              </Grid>
          </Container>
      </Grow>
    </Container>
  );
}

export default App;
