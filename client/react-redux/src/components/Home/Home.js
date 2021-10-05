import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts'

import Pagination from '../Pagination/Pagination'

import { getPosts } from '../../actions/post.actions'

import useStyles from './styles'
import { Paper, Container, Grow, Grid, AppBar, TextField, Button, Chip } from '@mui/material';
import  ChipInput from 'material-ui-chip-input';
import { getPostBySearch } from '../../actions/post.actions';


function useQuery () {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
     const classes = useStyles()

    const [ currentId, setCurrentId] = useState(null)
    const [search, setSearch] = useState('')
    const [tags, setTags] = useState([])

  const dispatch = useDispatch()
  const query = useQuery()
  const history = useHistory()
  const page = query.get('page') || 1
  const searchQuery= query.get('searchQuery')

 useEffect(() => {
      dispatch(getPosts())
    }, [currentId, dispatch])

 const handleSearchPost = (e) => {
      if(search.trim() || tags){
        //dispatch ---> fetchPost
        dispatch(getPostBySearch({ search, tags: tags.join(',') }))
        history.push(`/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
      } else {
        history.push('/')
      }
    }
    const handleKeyPress = (e) => {
      if(e.keyCode === 13){
        handleSearchPost()
      }
    }

   

    const handleAdd = (tag) => setTags([ ...tags, tag])
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete))

     return (
           <Grow in>
          <Container className={classes.content} >
              <Grid container direction="column-reverse" justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={9}>
                  <Posts setCurrentId={setCurrentId}/> 
                  </Grid>
                  <AppBar className={classes.appBarSearch} position="static" color="inherit"> 
                      <TextField 
                      name="search"
                      variant="outlined"
                      label="Search memories ..."
                      fullWidth
                      onKeyPress={handleKeyPress}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                                            />
                          <ChipInput 
                          style={{ margin: '10px 0'}}
                          value={tags}
                          onAdd={handleAdd}
                          onDelete={handleDelete}
                          label="Search Tags"
                          variant="outlined"
                          // clickable={true}
                          />
                          <Button className={classes.buttonSearch} onClick={handleSearchPost} variant="contained">Search</Button>
                  </AppBar>
                  <Grid className={classes.form} item xs={12} sm={6} lg={5}>
                 <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    <Paper className={classes.paginations} elevation={6}>
                      <Pagination/>

                    </Paper>
                  </Grid>
                         </Grid>
          </Container>
      </Grow>
     )
}

export default Home
