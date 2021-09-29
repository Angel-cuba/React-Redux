import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core'

import { useDispatch } from 'react-redux'

import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts'

import { getPosts } from '../../actions/post.actions'

import useStyles from './styles'

const Home = () => {
     const classes = useStyles()

    const [ currentId, setCurrentId] = useState(null)

  const dispatch = useDispatch()

 useEffect(() => {
      dispatch(getPosts())
    }, [currentId, dispatch])

     return (
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
     )
}

export default Home
