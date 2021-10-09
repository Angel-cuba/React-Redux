import React, { useEffect } from 'react'
import { Pagination, PaginationItem} from '@material-ui/lab'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../actions/post.actions'

import useStyles from './styles';


const Paginate = ({ page }) => {
     const classes = useStyles()
     const dispatch = useDispatch()
	
     const { numberOfPages } = useSelector((state) => state.posts)

useEffect(() => {
     if(page) dispatch(getPosts(page))
},[page])


     return (
          <Pagination
          className={classes.ul}
          count={numberOfPages}
          page={Number(page) || 1}
          color="standard"
          variant="outlined"
          renderItem={(item, index) => (
               
                   <PaginationItem className={classes.paginationItem} {...item } component={Link} to={`/posts?page=${item.page}`} /> 
            
               
          )}
          />
     )
}

export default Paginate
